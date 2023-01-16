const { expect } = require("chai");
const { ethers }  = require("hardhat");

describe("Cabal", function () {
    let CABAL;
    let owner;
    let user1;
    // let LendingHelpers;

    beforeEach(async () => {
        [owner, user1] = await ethers.getSigners();
        const LendingHelpers_contract = await ethers.getContractFactory(
            'LendingHelpers'
        )
        LendingHelpers = await LendingHelpers_contract.deploy();

        const CabalContract = await ethers.getContractFactory("Cabal", {
            libraries: {
                LendingHelpers: LendingHelpers.address
            }
        });

        CABAL = await CabalContract.deploy();
    })

    describe("Issue Bond", () => {
        it("should reject call if less than one ETH is passed for Bond collateral", async function () {
            await expect(CABAL.issueBond(15778458, 1000,[ethers.constants.AddressZero])).to.be.revertedWith("Must deposit atleast one ETH")
        })

        it("should revert if passed an invalid maturity time", async function () {
            await expect(CABAL.connect(user1).issueBond(100, 1000, [ethers.constants.AddressZero], {value: ethers.utils.parseEther("2")})).to.be.revertedWith("INVALID maturity time");
        })

    })
})
