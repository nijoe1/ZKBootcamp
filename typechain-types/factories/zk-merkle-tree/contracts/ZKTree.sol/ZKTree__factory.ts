/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ZKTree,
  ZKTreeInterface,
} from "../../../../zk-merkle-tree/contracts/ZKTree.sol/ZKTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_levels",
        type: "uint32",
      },
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "contract IVerifier",
        name: "_verifier",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "leafIndex",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Commit",
    type: "event",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifiers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c034620001fd57601f6200148138819003918201601f191683019291906001600160401b0384118385101762000202578160609284926040968752833981010312620001fd57805163ffffffff91828216809203620001fd57602081810151926001600160a01b03929091908385168503620001fd578601519283168303620001fd57600380546001600160401b03191690558115620001ae57808210156200016b576000938263ffffffff19865416178555608052835b8581168381101562000103579081620000d2889362000218565b908752600184528887205516858114620000ef57600101620000b8565b634e487b7160e01b85526011600452602485fd5b505092919390600019018181116200015757620001268693926002921662000218565b9382805252205560a05251610c6a908162000817823960805181818161013e015261032e015260a051816105150152f35b634e487b7160e01b83526011600452602483fd5b60649086519062461bcd60e51b82526004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e20333200006044820152fd5b60849086519062461bcd60e51b82526004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b6064820152fd5b600080fd5b634e487b7160e01b600052604160045260246000fd5b806200024357507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c90565b600181036200027157507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d90565b600281036200029f57507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c20090565b60038103620002cd57507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb90565b60048103620002fb57507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c990565b600581036200032957507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb5495990565b600681036200035757507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c90565b600781036200038557507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb490565b60088103620003b357507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff8090565b60098103620003e057507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c00790565b600a81036200040e57507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e3090565b600b81036200043c57507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e590565b600c81036200046a57507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f90565b600d81036200049857507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd90565b600e8103620004c657507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb10890565b600f8103620004f457507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b690565b601081036200052257507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db6185490565b601181036200055057507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea90565b601281036200057e57507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d90565b60138103620005ac57507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc0590565b60148103620005da57507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d490565b601581036200060857507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b296790565b601681036200063657507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc345390565b601781036200066457507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c4890565b601881036200069257507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd190565b60198103620006c057507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c90565b601a8103620006ee57507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce9990565b601b81036200071c57507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f35490565b601c81036200074957507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d90565b601d81036200077757507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f42790565b601e8103620007a557507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb90565b601f03620007d1577f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc90565b60405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606490fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182632997e86b14610544575081632b7ac3f314610500578163414a37ba146104c55781634ecf518b146104a25781635bb93995146102bf5781636d9833e314610296578163839df9451461026957816390eeb02b14610244578163ba70f75714610216578163c2b40ae4146101ee578163cd87a3b4146101d2578163e8295588146101a8578163ec7329591461016d578163ed33639f14610129578163f178e47c146100fd575063fc7e9c6f146100d557600080fd5b346100f957816003193601126100f9576003549051602091821c63ffffffff168152f35b5080fd5b9050346101255760203660031901126101255760209282913581526001845220549051908152f35b8280fd5b5050346100f957816003193601126100f957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5050346100f957816003193601126100f957602090517f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c8152f35b8284346101cf5760203660031901126101cf57506101c860209235610660565b9051908152f35b80fd5b5050346100f957816003193601126100f95760209051601e8152f35b9050346101255760203660031901126101255760209282913581526002845220549051908152f35b5050346100f957816003193601126100f9578060209263ffffffff6003541681526002845220549051908152f35b5050346100f957816003193601126100f95760209063ffffffff600354169051908152f35b905034610125576020366003190112610125578160209360ff923581526005855220541690519015158152f35b8284346101cf5760203660031901126101cf57506102b6602092356105c4565b90519015158152f35b9050346101255781600319360112610125577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001916024359180358481101561045f5784841015610412578251633f1a118760e01b808252838201929092526024810187905260448101879052907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168483606481845afa80156104085785969789948a926103e2575b5094606494958751998a9788968752089084015260248301528760448301525afa9182156103d857602093926103a8575b5051908152f35b816103c99293503d84116103d1575b6103c18183610571565b8101906105a9565b5090386103a1565b503d6103b7565b81513d85823e3d90fd5b606495506103fe919250873d89116103d1576103c18183610571565b9094909190610370565b85513d8a823e3d90fd5b506020608492519162461bcd60e51b8352820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b6064820152fd5b506020606492519162461bcd60e51b8352820152602060248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c646044820152fd5b5050346100f957816003193601126100f95763ffffffff60209254169051908152f35b5050346100f957816003193601126100f957602090517f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018152f35b5050346100f957816003193601126100f957517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b9291503461056d57602036600319011261056d5780358452602090815292205460ff1615158152f35b8380fd5b90601f8019910116810190811067ffffffffffffffff82111761059357604052565b634e487b7160e01b600052604160045260246000fd5b91908260409103126105bf576020825192015190565b600080fd5b801561065a5763ffffffff8060035416918260019384805b6105ec575b505050505050600090565b1561064b575b600090848116908183526002602052604083205485146106425785911561063a575b168015610626576000190190856105dc565b634e487b7160e01b82526011600452602482fd5b50601e610614565b50505050505090565b81848216036105f257806105e1565b50600090565b8061068a57507f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c90565b600181036106b757507f256a6135777eee2fd26f54b8b7037a25439d5235caee224154186d2b8a52e31d90565b600281036106e457507f1151949895e82ab19924de92c40a3d6f7bcb60d92b00504b8199613683f0c20090565b6003810361071157507f20121ee811489ff8d61f09fb89e313f14959a0f28bb428a20dba6b0b068b3bdb90565b6004810361073e57507f0a89ca6ffa14cc462cfedb842c30ed221a50a3d6bf022a6a57dc82ab24c157c990565b6005810361076b57507f24ca05c2b5cd42e890d6be94c68d0689f4f21c9cec9c0f13fe41d566dfb5495990565b6006810361079857507f1ccb97c932565a92c60156bdba2d08f3bf1377464e025cee765679e604a7315c90565b600781036107c557507f19156fbd7d1a8bf5cba8909367de1b624534ebab4f0f79e003bccdd1b182bdb490565b600881036107f257507f261af8c1f0912e465744641409f622d466c3920ac6e5ff37e36604cb11dfff8090565b6009810361081e57507e58459724ff6ca5a1652fcbc3e82b93895cf08e975b19beab3f54c217d1c00790565b600a810361084b57507f1f04ef20dee48d39984d8eabe768a70eafa6310ad20849d4573c3c40c2ad1e3090565b600b810361087857507f1bea3dec5dab51567ce7e200a30f7ba6d4276aeaa53e2686f962a46c66d511e590565b600c81036108a557507f0ee0f941e2da4b9e31c3ca97a40d8fa9ce68d97c084177071b3cb46cd3372f0f90565b600d81036108d257507f1ca9503e8935884501bbaf20be14eb4c46b89772c97b96e3b2ebf3a36a948bbd90565b600e81036108ff57507f133a80e30697cd55d8f7d4b0965b7be24057ba5dc3da898ee2187232446cb10890565b600f810361092c57507f13e6d8fc88839ed76e182c2a779af5b2c0da9dd18c90427a644f7e148a6253b690565b6010810361095957507f1eb16b057a477f4bc8f572ea6bee39561098f78f15bfb3699dcbb7bd8db6185490565b6011810361098657507f0da2cb16a1ceaabf1c16b838f7a9e3f2a3a3088d9e0a6debaa748114620696ea90565b601281036109b357507f24a3b3d822420b14b5d8cb6c28a574f01e98ea9e940551d2ebd75cee12649f9d90565b601381036109e057507f198622acbd783d1b0d9064105b1fc8e4d8889de95c4c519b3f635809fe6afc0590565b60148103610a0d57507f29d7ed391256ccc3ea596c86e933b89ff339d25ea8ddced975ae2fe30b5296d490565b60158103610a3a57507f19be59f2f0413ce78c0c3703a3a5451b1d7f39629fa33abd11548a76065b296790565b60168103610a6757507f1ff3f61797e538b70e619310d33f2a063e7eb59104e112e95738da1254dc345390565b60178103610a9457507f10c16ae9959cf8358980d9dd9616e48228737310a10e2b6b731c1a548f036c4890565b60188103610ac157507f0ba433a63174a90ac20992e75e3095496812b652685b5e1a2eae0b1bf4e8fcd190565b60198103610aee57507f019ddb9df2bc98d987d0dfeca9d2b643deafab8f7036562e627c3667266a044c90565b601a8103610b1b57507f2d3c88b23175c5a5565db928414c66d1912b11acf974b2e644caaac04739ce9990565b601b8103610b4857507f2eab55f6ae4e66e32c5189eed5c470840863445760f5ed7e7b69b2a62600f35490565b601c8103610b7457507e2df37a2642621802383cf952bf4dd1f32e05433beeb1fd41031fb7eace979d90565b601d8103610ba157507f104aeb41435db66c3e62feccc1d6f5d98d0a0ed75d1374db457cf462e3a1f42790565b601e8103610bce57507f1f3c6fd858e9a7d4b0d1f38e256a09d81d5a5e3c963987e2d4b814cfab7c6ebb90565b601f03610bf9577f2c7a07d20dff79d01fecedc1134284a8d08436606c93693b67e333f671bf69cc90565b60405162461bcd60e51b8152602060048201526013602482015272496e646578206f7574206f6620626f756e647360681b6044820152606490fdfea2646970667358221220670ca274975d262317483951f42807bad11682157c72dbdfb6522c05a352ae8064736f6c63430008140033";

type ZKTreeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZKTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZKTree__factory extends ContractFactory {
  constructor(...args: ZKTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _levels: PromiseOrValue<BigNumberish>,
    _hasher: PromiseOrValue<string>,
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZKTree> {
    return super.deploy(
      _levels,
      _hasher,
      _verifier,
      overrides || {}
    ) as Promise<ZKTree>;
  }
  override getDeployTransaction(
    _levels: PromiseOrValue<BigNumberish>,
    _hasher: PromiseOrValue<string>,
    _verifier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _levels,
      _hasher,
      _verifier,
      overrides || {}
    );
  }
  override attach(address: string): ZKTree {
    return super.attach(address) as ZKTree;
  }
  override connect(signer: Signer): ZKTree__factory {
    return super.connect(signer) as ZKTree__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZKTreeInterface {
    return new utils.Interface(_abi) as ZKTreeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ZKTree {
    return new Contract(address, _abi, signerOrProvider) as ZKTree;
  }
}
