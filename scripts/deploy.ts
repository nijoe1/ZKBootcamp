import { ethers } from "hardhat";
import { mimcSpongecontract } from "circomlibjs";
import {
  generateCommitment,
  calculateMerkleRootAndZKProof,
} from "zk-merkle-tree";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "dotenv/config";
import { network } from "hardhat";

async function main() {
  const private_key = network.config.accounts[0];
  const wallet = new ethers.Wallet(private_key, new ethers.providers.JsonRpcProvider("https://arb-sepolia.g.alchemy.com/v2/1OG0MWRQQyB3TTJlWOqCj_d2yhs2lbyT"));
  const SEED = "mimcsponge";
  const TREE_LEVELS = 20;

  // // Deploy MiMCSponge contract
  // const MiMCSponge = await ethers.getContractFactory(
  //   mimcSpongecontract.abi,
  //   mimcSpongecontract.createCode(SEED, 220),
  //   wallet
  // );
  
  // const mimcsponge = await MiMCSponge.deploy();
  // await mimcsponge.deployed();
  // console.log("MiMCSponge deployed to: ", mimcsponge.address);

  // // Deploy Verifier contract
  // const Verifier = await ethers.getContractFactory("Verifier", wallet);
  // const verifier = await Verifier.deploy();
  // await verifier.deployed();

  // console.log("Verifier deployed to: ", verifier.address);

  // Deploy ZK_RFP contract
  const ZK_RFP = await ethers.getContractFactory("ZK_RFP", wallet);
  const REGISTRY = "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3";
  const ALLO = "0x1133eA7Af70876e64665ecD07C0A0476d09465a1";
  const NAME = "Test";
  const METADATA = [1, "ipfs://cid"];
  const HASHER = "0xF14062255F1f01cBF6F98E2c2fBF84B063600de5";
  const VERIFIER = "0x5C519fDf82CD5996AA504F2140EEE2362e160b90";

  const zk_rfp = await ZK_RFP.deploy(
    REGISTRY,
    ALLO,
    NAME,
    METADATA as any,
    HASHER,
    VERIFIER
  );
  await zk_rfp.deployed();
  const _zkrfp = ZK_RFP.attach(zk_rfp.address);
  let res = await _zkrfp.profileId();
  ;
    console.log("Recipient: ", res);

  console.log("ZK_RFP deployed to: ", zk_rfp.address);

  // Initialize pool
  const initializeParams = [1, [100, true, true]] as any;
  let create = await _zkrfp.createPool(
    initializeParams,
    [1, "ipfs://cid"] as any,
    [wallet.address],
    100,
    100,
    { value: 1, gasLimit: 100000000}
  );

  await create.wait();
  let poolId = await _zkrfp.poolIds(0);
;
  console.log("Pool ID: ", poolId);

  // Register recipient
  let register = await zk_rfp.registerRecipient(
    poolId,
    1,
    "Recipient",
    [1, "ipfs://cid"] as any,
    [wallet.address,zk_rfp.address],
    { gasLimit: 100000000}
  );
  await register.wait();

  console.log("Recipient registered.");

  let recipients = await _zkrfp.getPoolRecipientAddresses(poolId);
  let recipient = recipients[0];

  console.log("Recipient: ", recipient);

  // Register voters
  const commitment1 = await generateCommitment();
  console.log("Commitment 1: ", commitment1.commitment);

  let pool_zk_vote =await zk_rfp.getPoolZKTreeVote(poolId);
  const cd1 = await calculateMerkleRootAndZKProof(
    pool_zk_vote,
    wallet,
    20,
    commitment1
  );

  console.log("Nullifier Hash 1: ", commitment1.nullifierHash);

  let commit = await zk_rfp.commitment(poolId, 1, commitment1.commitment,{ gasLimit: 100000000});
  await commit.wait();

  console.log("Voter 1 registered.");

  let privateVote = await zk_rfp.AllocateToRecipient(
    poolId,
    recipient,
    commitment1.nullifierHash,
    cd1.root,
    cd1.proof_a,
    cd1.proof_b,
    cd1.proof_c
  );
  await privateVote.wait();

  console.log("Voter 1 voted.");

  // Set pool winner
  let setPoolWinner = await zk_rfp.setPoolWinner(poolId);
  await setPoolWinner.wait();

  console.log("Pool winner set.");

  let winner = await _zkrfp.poolWinner(poolId);

  console.log("Winner: ", winner);

  console.log("Deployment complete.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
