import { ethers } from "hardhat";
import { mimcSpongecontract } from "circomlibjs";
import { ZK_RFP } from "../typechain-types";
import {
  generateCommitment,
  calculateMerkleRootAndZKProof,
} from "zk-merkle-tree";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "dotenv/config";
import { network } from "hardhat";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PRIVATE_KEY2 = process.env.PRIVATE_KEY2;

const SEED = "mimcsponge";

// the default verifier is for 20 levels, for different number of levels, you need a new verifier circuit
const TREE_LEVELS = 20;

describe("ZKTree Smart contract test", () => {
  let zk_rfp: ZK_RFP;

  before(async () => {
    const signers = await ethers.getSigners();
    const MiMCSponge = new ethers.ContractFactory(
      mimcSpongecontract.abi,
      mimcSpongecontract.createCode(SEED, 220),
      signers[0],
    );
    const mimcsponge = await MiMCSponge.deploy();
    const Verifier = await ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    const ZK_RFP = await ethers.getContractFactory("ZK_RFP");
    const REGISTRY = "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3";
    const ALLO = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
    const NAME = "Test";
    const METADATA = [1, "ipfs://cid"] as any;
    const HASHER = mimcsponge.address;
    const VERIFIER = verifier.address;

    zk_rfp = await ZK_RFP.deploy(
      REGISTRY,
      ALLO,
      NAME,
      METADATA,
      HASHER,
      VERIFIER,
    );
  });

  it("Test the full process", async () => {
    const private_key = network.config.accounts[0];
    const wallet = new ethers.Wallet(private_key, ethers.provider);

    // /// @notice Stores the details needed for initializing strategy
    // struct InitializeParams {
    //     uint256 maxBid;
    //     bool useRegistryAnchor;
    //     bool metadataRequired;
    // }

    // /// @notice Stores the details needed for initializing strategy
    // struct InitializeParamsCommittee {
    //     uint256 voteThreshold;
    //     InitializeParams params;
    // }

    const initializeParams = [2, [100, true, true]] as any;

    const signers = await ethers.getSigners();

    await zk_rfp.createPool(
      // pool initialization parameters
      initializeParams,
      // metadata parameters for the pool creator
      ["Test", "ipfs://cid"] as any,
      // managers validators of the pool
      [signers[1].address],
      // registration duration
      100,
      // voting duration
      100,
      { value: 1000 },
    );

    let poolId = await zk_rfp.poolIds(0);
    await zk_rfp.registerRecipient(
      poolId,
      100,
      "Recipient",
      ["Recipient", "ipfs://cid"] as any,
      [signers[1].address],
    );

    // register 3 voters
    const commitment1 = await generateCommitment();

    const cd1 = await calculateMerkleRootAndZKProof(
      zk_rfp.address,
      signers[2],
      TREE_LEVELS,
      commitment1,
      "keys/Verifier.zkey",
    );

    // register commitment for the pool
    // 1 is the unique hash for the commitment
    // commitment1.commitment is the commitment
    await zk_rfp.commitment(poolId, 1, commitment1.commitment);

    // allocate vote to recipient a recipient the commitment nullifier privately from any account
    await zk_rfp.AllocateToRecipient(
      poolId,
      signers[1].address,
      commitment1.nullifierHash,
      cd1.root,
      cd1.proof_a,
      cd1.proof_b,
      cd1.proof_c,
    );

    await zk_rfp.setPoolWinner(poolId);
  });
});
