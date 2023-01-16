const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LendingHelpers", function () {
    let lendingHelpers;

    beforeEach(async () => {
        const LendingHelpers_contract = await ethers.getContractFactory("LendingHelpers");
        lendingHelpers = await LendingHelpers_contract.deploy();
    })
    // async function deployOnceFixture() {
    //     const [owner, user1] = await ethers.getSigners();
    //     lend = (await deployContract(owner, LendingHelpersArtifact));

    //     return { lend, owner, user1}
    // }

    it("Should return 80% of amount sent as usable collateral", async () => {
        // await expect(lendingHelpers.simplefunc()).to.equal(1);
        // const result = await lendingHelpers.simplefunc();

        // const { lend } = await loadFixture(deployOnceFixture);
        // expect(await lendingHelpers.simplefunc()).to.equal("0");
        
        await expect(await lendingHelpers.usableCollateralAmount(100)).to.equal(80);
    })
})