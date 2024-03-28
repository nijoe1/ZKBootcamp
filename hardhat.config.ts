require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  defaultNetwork: "arbitrum-sepolia",

  networks: {
    "arbitrum-sepolia": {
      chainId: 421614,
      url: "https://arbitrum-sepolia.blockpi.network/v1/rpc/public		",
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "KNVT7KRT9B15Z5UTXZT8TG8HNMIJXWXRMY",
    customChains: [],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    scripts: "./scripts",
  },
};
