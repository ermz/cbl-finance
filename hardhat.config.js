require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy-ethers");
require("dotenv").config();

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli.g.alchemy.com/v2/c8LuNzJlVdS8ffj1-e4TRyHRlUEEk13H";
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1
    },
    localhost: {
      chainId: 31337
    },
    goerli: {
      chainId: 5,
      blockConfirmations: 6,
      url: GOERLI_RPC_URL,
      accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
      saveDeployments: true
    }
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17"
      }
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    player: {
      default: 1
    }
  },
  mocha: {
    timeout: 300000
  }
};
