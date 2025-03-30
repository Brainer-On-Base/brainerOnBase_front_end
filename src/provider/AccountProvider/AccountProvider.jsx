import React, { useEffect, useState } from "react";
import AccountContext from "./AccountContext";
import { ethers } from "ethers";
import useModals from "../../hooks/useSweetAlert";

const BASE_SEPOLIA_RPC = "https://rpc.ankr.com/eth_sepolia";

const AccountProvider = ({ children }) => {
  const [account, setAccount] = React.useState(() => {
    return localStorage.getItem("account")
      ? localStorage.getItem("account")
      : null;
  });
  const [web3provider, setWeb3Provider] = React.useState(() => {
    const provider = localStorage.getItem("web3provider");
    return provider ? new ethers.BrowserProvider(window.ethereum) : null;
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
  const { showPopUp } = useModals();

  useEffect(() => {
    const storedProvider = localStorage.getItem("web3provider");

    if (storedProvider && window.ethereum) {
      // Si hay una wallet conectada, usa su proveedor
      const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
      setWeb3Provider(eth_web3_provider);
      console.log("Usando proveedor de la wallet");
      localStorage.setItem("web3provider", "wallet"); // Guardar que estamos usando la wallet
    } else {
      // Si no hay wallet conectada, usamos el RPC público de Sepolia
      const ethProvider = new ethers.JsonRpcProvider(
        "https://rpc.ankr.com/eth_sepolia",
        {
          chainId: 11155111,
          name: "Base Sepolia",
        }
      );
      setWeb3Provider(ethProvider);
      console.log("Usando RPC público de Sepolia");
      localStorage.setItem("web3provider", "rpc"); // Guardar que estamos usando el RPC
    }
  }, []); // Solo se ejecuta una vez cuando el componente se monta

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

      const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
      setWeb3Provider(eth_web3_provider);
      localStorage.setItem("web3provider", "true");
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
