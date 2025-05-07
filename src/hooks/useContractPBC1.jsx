import React, { useContext } from "react";
import {
  BRAINER_BPC_NFT_ABI_CONTRACT,
  BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
  BRAINER_IPFS_METADATA,
} from "../CONSTANTS";
import AccountContext from "../provider/AccountProvider/AccountContext";
import { Contract } from "ethers";
import { HPopUp } from "../HocComponents";
import BrainerOnBaseService from "../service/BrainerOnBaseService";

const useContractPBC1 = () => {
  const { account, web3provider, isConnected } = useContext(AccountContext);

  const mint_BPC1_NFT = async () => {
    if (!isConnected) {
      HPopUp({ message: "Connect your wallet first.", type: "warning" });
      return;
    }

    try {
      const signer = await web3provider.getSigner();
      const nftContract = new Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        signer
      );

      const currentTokenId = await nftContract.currentTokenId();
      const maxSupply = await nftContract.maxSupply();
      if (currentTokenId >= maxSupply) {
        HPopUp({ message: "All NFTs have been minted.", type: "info" });
        return;
      }

      const mintPrice = await nftContract.mintPrice();
      const address = await signer.getAddress();
      const balance = await signer.provider.getBalance(address);

      if (balance < mintPrice) {
        HPopUp({
          message: "You don't have enough ETH to mint this NFT.",
          type: "error",
        });
        return;
      }

      // 🧠 Mint
      await nftContract
        .mintNFT(address, { value: mintPrice })
        .then(async (res) => {
          const tokenURI = await nftContract.tokenURI(currentTokenId);
          const metadata = await getIPFSInfo(tokenURI);

          const name = metadata.name;
          const match = name.match(/#(\d+)$/);
          const number = match ? parseInt(match[1]) : null;
          // 💾 Guardar en el backend
          await BrainerOnBaseService.mintNFT({
            tokenId: Number(currentTokenId),
            minted: true,
            mintedBy: address,
            owner: address,
            name: metadata.name,
            image: metadata.image,
            tokenURI: tokenURI,
            uriId: number,
            attributes: metadata.attributes,
          });

          HPopUp({
            message: `🎉 NFT minted successfully!, you get the Pixel Brainer #${number}!`,
            type: "success",
          });
        });

      // 📦 Obtener tokenURI y metadata

      // return { tokenId, tokenURI, ...metadata };
    } catch (error) {
      console.log("❌ Error minting NFT:", error.reason);

      let errorMessage = "Error minting NFT. Try again later";
      const errorText =
        error?.reason ??
        error?.error?.message ??
        error?.data?.message ??
        error?.message ??
        "";
      console.log("Error text:", errorText);
      if (errorText === "Max 2 per wallet") {
        errorMessage = "You can only mint up to 2 NFTs per wallet.";
      } else if (errorText.includes("Insufficient funds")) {
        errorMessage = "You don't have enough ETH to mint this NFT.";
      } else if (errorText.includes("Sold out")) {
        errorMessage = "All NFTs have been minted.";
      }

      HPopUp({ message: errorMessage, type: "error" });
      throw error;
    }
  };

  const getMintedCount = async () => {
    if (!web3provider) return 0;

    try {
      const nftContract = new Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        web3provider
      );

      const mintedCount = await nftContract.currentTokenId();
      return Number(mintedCount);
    } catch (error) {
      console.error("Error fetching minted count:", error);
      return 0;
    }
  };

  const getIPFSInfo = async (uri) => {
    try {
      const response = await fetch(uri);
      if (!response.ok) throw new Error("Failed to fetch NFT data");
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return {
    mint_BPC1_NFT,
    getMintedCount,
    getIPFSInfo,
  };
};

export default useContractPBC1;
