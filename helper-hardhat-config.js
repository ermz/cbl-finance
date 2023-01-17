const { ethers } = require("ethers");

const networkConfig = {
    31337: {
        name: "localhost",
        entranceFee: ethers.utils.parseEther("0.01")
    },
    5: {
        name: "goerli",
        vrfCoordinatorV2: "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D",
        entranceFee: ethers.utils.parseEther("0.01")
    }
}

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    developmentChains,
    networkConfig
};