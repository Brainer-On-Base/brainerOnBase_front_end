import React, { useState } from "react";
import {
  BRAINER_BPC_NFT_ABI_CONTRACT,
  BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
  BRAINER_IPFS_METADATA,
} from "../CONSTANTS";
import useModals from "./useSweetAlert";
import AccountContext from "../provider/AccountProvider/AccountContext";
import { ethers } from "ethers";
import { useEffect } from "react";

const UseContract = () => {
  const { account, setAccount, web3provider, setWeb3Provider, isConnected } =
    React.useContext(AccountContext);
  const { showPopUp } = useModals();

  useEffect(() => {
    if (web3provider) {
      getQuantityminted();
    }
  }, [account]);

  const getQuantityminted = async () => await getMintedCount();

  const connectWallet = async () => {
    if (!window.ethereum) {
      showPopUp({ text: "Metamask is not installed", icon: "error" });
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      showPopUp({ text: "Wallet connected!", icon: "success" });

      // Utiliza BrowserProvider en ethers v6
      const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
      setWeb3Provider(eth_web3_provider);
    } catch (error) {
      showPopUp({
        text: "Error while connecting with Metamask. Try again later",
        icon: "error",
      });
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    showPopUp({ text: "Wallet disconnected.", icon: "info" });
  };

  const mint_BPC1_NFT = async () => {
    if (!web3provider) {
      showPopUp({ text: "Connect your wallet first.", icon: "warning" });
      return;
    }

    const quantity = await getMintedCount();
    let uri = `https://braineronbase.com/ipfs/QmRXEswJmrEnap2gDSXQQsZ8Wtpdqc8GQBpCinQgLHP7gW/${quantity}.json`;

    try {
      const signer = await web3provider.getSigner();

      const nftContract = new ethers.Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        signer
      );

      // Llama a la función de minting y espera la transacción
      const tx = await nftContract.mintNFT(account, uri, {
        value: ethers.parseEther("0.01"),
      });
      await tx.wait();
      showPopUp({ text: "NFT minted successfully!", icon: "success" });
    } catch (error) {
      console.error("Error minting NFT:", error);
      showPopUp({ text: "Error minting NFT. Try again later", icon: "error" });
    }
  };

  const getMintedCount = async () => {
    if (!web3provider) return;

    try {
      const nftContract = new ethers.Contract(
        BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
        BRAINER_BPC_NFT_ABI_CONTRACT.abi,
        web3provider
      );
      const mintedCount = await nftContract.currentTokenId();
      return mintedCount;
    } catch (error) {
      console.error("Error fetching minted count:", error);
    }
  };

  const getIPFSInfo = async (id) => {
    const response = await fetch(`${BRAINER_IPFS_METADATA}/${id}.json`)
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

  return {
    connectWallet,
    disconnectWallet,
    mint_BPC1_NFT,
    account,
    web3provider,
    isConnected,
    getMintedCount,
    getIPFSInfo,
  };
};

export default UseContract;
