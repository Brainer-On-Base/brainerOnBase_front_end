import { expect } from "chai";
import { ethers } from "hardhat";


describe("BrainerNFT", function () {
    let BrainerNFT;
    let brainerNFT;
    let owner;
    let addr1;

    beforeEach(async function () {
        BrainerNFT = await ethers.getContractFactory("BrainerNFT");
        [owner, addr1] = await ethers.getSigners();
        brainerNFT = await BrainerNFT.deploy();
    });

    it("Should mint an NFT to the recipient", async function () {
        await brainerNFT.mintNFT(addr1.address);
        const ownerOfToken = await brainerNFT.ownerOf(0);
        expect(ownerOfToken).to.equal(addr1.address);
    });
});
