import React, { useEffect, useState } from "react";
import AccountContext from "./AccountContext";
import { ethers } from "ethers";
import { BRAINER_BPC_NFT_ABI_CONTRACT } from "../../CONSTANTS";
import { HPopUp } from "../../HocComponents";

const BLOCKCHAIN_NODE_API_KEY = import.meta.env.VITE_BLOCKCHAIN_NODE_API_KEY;

const AccountProvider = ({ children }) => {
  const [account, setAccount] = React.useState(() => {
    return localStorage.getItem("account")
      ? localStorage.getItem("account")
      : null;
  });
  const [web3provider, setWeb3Provider] = React.useState(() => {
    const provider = localStorage.getItem("web3provider");
    return provider && window?.ethereum
      ? new ethers.BrowserProvider(window.ethereum)
      : null;
  });
  const [contract, setContract] = React.useState(() => {
    const contractAddress = localStorage.getItem("contractAddress");
    return contractAddress
      ? new ethers.Contract(
          contractAddress,
          BRAINER_BPC_NFT_ABI_CONTRACT.abi,
          web3provider
        )
      : null;
  });
  const [isConnected, setIsConnected] = useState(!!account);

  useEffect(() => {
    const storedProvider = localStorage.getItem("web3provider");

    if (storedProvider && window.ethereum) {
      // Si hay una wallet conectada, usa su proveedor
      const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
      setWeb3Provider(eth_web3_provider);
      localStorage.setItem("web3provider", "wallet"); // Guardar que estamos usando la wallet
    } else {
      // Si no hay wallet conectada, usar el RPC público de Sepolia o el que uses
      const providerToUse = new ethers.JsonRpcProvider(
        `https://rpc.ankr.com/eth_sepolia/${BLOCKCHAIN_NODE_API_KEY}`,
        {
          chainId: 11155111, // Sepolia
          name: "Base Sepolia",
        }
      );
      setWeb3Provider(providerToUse);
      localStorage.setItem("web3provider", "rpc"); // Guardar en localStorage
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      HPopUp({
        message: "Please install Metamask to use this feature.",
        type: "error",
      });
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
      const network = await eth_web3_provider.getNetwork();

      if (network.chainId !== 84532n) {
        HPopUp({
          message:
            "Please switch to the Base Sepolia network and refresh the page.",
          type: "error",
        });
        setIsConnected(false);
        return;
      }
      HPopUp({
        message: "Wallet connected successfully.",
        type: "success",
      });

      setWeb3Provider(eth_web3_provider);
      localStorage.setItem("web3provider", "true");
      setIsConnected(true);
    } catch (error) {
      HPopUp({
        message: "Error while connecting with Metamask. Try again later",
        type: "error",
      });
      setIsConnected(false);
      localStorage.removeItem("web3provider");
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    HPopUp({
      message: "Wallet disconnected successfully.",
      type: "success",
    });
    setIsConnected(false);
    localStorage.removeItem("web3provider");
  };

  return (
    <AccountContext.Provider
      value={{
        account,
        web3provider,
        contract,
        setAccount,
        setWeb3Provider,
        setContract,
        isConnected,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
