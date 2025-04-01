import React, { useState, useEffect, useContext } from "react";
import {
  BRAINER_BPC_NFT_ABI_CONTRACT,
  BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
  BRAINER_IPFS_METADATA,
} from "../CONSTANTS";
import AccountContext from "../provider/AccountProvider/AccountContext";
import { ethers } from "ethers";
import { HPopUp } from "../HocComponents";

const useContractPBC1 = () => {
  const { account, web3provider, isConnected } = useContext(AccountContext);

  const mint_BPC1_NFT = async () => {
    if (!isConnected) {
      HPopUp({
        message: "Connect your wallet first.",
        type: "warning",
      });
      return;
    }

    try {
      const signer = await web3provider.getSigner();

      const nftContract = new ethers.Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        signer
      );

      // ✅ Check si ya se mintearon todos
      const currentTokenId = await nftContract.currentTokenId();
      const maxSupply = await nftContract.maxSupply();
      if (currentTokenId >= maxSupply) {
        HPopUp({
          message: "All NFTs have been minted.",
          type: "info",
        });
        return;
      }

      const mintPrice = await nftContract.getMintPrice();
      const balance = await signer.getBalance();

      if (balance < mintPrice) {
        HPopUp({
          message: "You don't have enough ETH to mint this NFT.",
          type: "error",
        });
        return;
      }

      const tx = await nftContract.mintNFT(account, {
        value: mintPrice,
      });

      await tx.wait();

      HPopUp({
        message: "🎉 NFT minted successfully!",
        type: "success",
      });
    } catch (error) {
      let errorMessage = "Error minting NFT. Try again later";

      const errorText =
        error?.reason ||
        error?.error?.message ||
        error?.data?.message ||
        error?.message ||
        "";

      if (errorText.includes("Max 2 NFTs per wallet")) {
        errorMessage = "You can only mint up to 2 NFTs per wallet.";
      } else if (errorText.includes("Insufficient funds")) {
        errorMessage = "You don't have enough ETH to mint this NFT.";
      } else if (errorText.includes("Max supply reached")) {
        errorMessage = "All NFTs have been minted.";
      }

      HPopUp({
        message: errorMessage,
        type: "error",
      });
    }
  };

  const getMintedCount = async () => {
    if (!web3provider) return 0;

    try {
      const nftContract = new ethers.Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        web3provider
      );

      const mintedCount = await nftContract.currentTokenId(); // ✅
      return Number(mintedCount);
    } catch (error) {
      console.error("Error fetching minted count:", error);
      return 0;
    }
  };

  const getIPFSInfo = async (uri) => {
    const response = await fetch(uri)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch NFT data");
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));

    return response;
  };

  const getMintedNFTs = async (start = 0, end = 50) => {
    if (!web3provider) return [];
    try {
      const nftContract = new ethers.Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        web3provider
      );

      // Obtener el valor actual de currentTokenId
      const currentTokenId = await getMintedCount();

      // Si no hay tokens minteados, retornar un array vacío
      if (currentTokenId === 0) {
        return [];
      }

      // Ajustar el valor de end si es mayor que currentTokenId
      if (end > currentTokenId) {
        end = currentTokenId;
      }

      // Asegurarse de que start no sea mayor que end
      if (start > end) {
        console.error("Start index cannot be greater than end index.");
        return [];
      }

      // Llama a la nueva función getTokenURIs en lotes
      const uris = await nftContract.getTokenURIs(start, end);
      const mintedNFTs = uris.map((uri, index) => ({
        tokenId: start + index,
        uri,
      }));

      // console.log("NFTs minteados:", mintedNFTs);
      return mintedNFTs;
    } catch (error) {
      console.error("Error fetching minted NFTs:", error);
      return [];
    }
  };

  const getNFTByTokenId = async (tokenId) => {
    if (!web3provider) return null;
    try {
      const nftContract = new ethers.Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        web3provider
      );

      const uri = await nftContract.tokenURI(tokenId);
      return { tokenId, uri };
    } catch (error) {
      console.error("Error fetching NFT by tokenId:", error);
      return null;
    }
  };

  return {
    mint_BPC1_NFT,
    getMintedCount,
    getIPFSInfo,
    getMintedNFTs,
    getNFTByTokenId,
  };
};

export default useContractPBC1;
