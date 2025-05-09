import React, { useContext } from "react";
import { Contract, formatEther, parseEther } from "ethers";
import Web3Context from "../../provider/Web3Provider/Web3Context";
import { HPopUp } from "../../HocComponents";
import {
  BRAINER_PRESALE_CONTRACT_ADDRESS,
  BRAINER_PRESALE_ABI_CONTRACT,
} from "../../CONSTANTS";

const useContractPreSale = () => {
  const { account, web3provider, isConnected } = useContext(Web3Context);

  const buyTokens = async (ethAmount) => {
    if (!isConnected) {
      HPopUp({ message: "Connect your wallet first.", type: "warning" });
      return;
    }

    if (ethAmount < 0.02) {
      HPopUp({ message: "Minimum contribution is 0.02 ETH", type: "warning" });
      return;
    }

    try {
      const signer = await web3provider.getSigner();

      const presaleContract = new Contract(
        BRAINER_PRESALE_CONTRACT_ADDRESS,
        BRAINER_PRESALE_ABI_CONTRACT.abi,
        signer
      );

      console.log(typeof ethAmount, ethAmount);
      const tx = await presaleContract.buyTokens({
        value: parseEther(ethAmount),
      });

      await tx.wait();

      HPopUp({ message: "🎉 Tokens purchased successfully!", type: "success" });
    } catch (error) {
      const errorText =
        error?.reason ||
        error?.error?.message ||
        error?.data?.message ||
        error?.message ||
        "Error buying tokens.";

      if (errorText.includes("Contribution below minimum")) {
        HPopUp({ message: "Minimum contribution is 0.02 ETH", type: "error" });
      } else if (errorText.includes("Exceeds max allowed per address")) {
        HPopUp({
          message: "You reached the max contribution per wallet (5 ETH).",
          type: "error",
        });
      } else {
        HPopUp({ message: errorText, type: "error" });
      }
    }
  };

  const claimForNFT = async (tokenId) => {
    if (!isConnected) {
      HPopUp({ message: "Connect your wallet first.", type: "warning" });
      return;
    }

    try {
      const signer = await web3provider.getSigner();

      const presaleContract = new Contract(
        BRAINER_PRESALE_CONTRACT_ADDRESS,
        BRAINER_PRESALE_ABI_CONTRACT.abi,
        signer
      );

      const tx = await presaleContract.claimForNFT(tokenId);
      await tx.wait();

      HPopUp({
        message: `🎉 Claimed BRNR for NFT #${tokenId}!`,
        type: "success",
      });
    } catch (error) {
      const errorText =
        error?.reason ||
        error?.error?.message ||
        error?.data?.message ||
        error?.message ||
        "Error claiming tokens.";

      if (errorText.includes("Not the owner of this NFT")) {
        HPopUp({ message: "This wallet doesn't own the NFT.", type: "error" });
      } else if (errorText.includes("Already claimed")) {
        HPopUp({
          message: "Tokens for this NFT already claimed.",
          type: "error",
        });
      } else {
        HPopUp({ message: errorText, type: "error" });
      }
    }
  };

  const getUserContribution = async () => {
    if (!web3provider) return false;
    const presaleContract = new Contract(
      BRAINER_PRESALE_CONTRACT_ADDRESS,
      BRAINER_PRESALE_ABI_CONTRACT.abi,
      web3provider
    );

    const amount = await presaleContract.totalContributed(account);
    return formatEther(amount);
  };

  return {
    buyTokens,
    claimForNFT,
    getUserContribution,
  };
};

export default useContractPreSale;
