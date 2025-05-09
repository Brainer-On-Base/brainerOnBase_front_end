import React, { useEffect, useState } from "react";
import Web3Context from "./Web3Context";
import { ethers } from "ethers";
import {
  BRAINER_BPC_NFT_ABI_CONTRACT,
  BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS,
  BRAINER_PRESALE_ABI_CONTRACT,
  BRAINER_PRESALE_CONTRACT_ADDRESS,
} from "../../CONSTANTS";
import { HPopUp } from "../../HocComponents";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setIsConnected } from "../../redux/slices/userSlice";
import BrainerOnBaseService from "../../service/BrainerOnBaseService";

const BLOCKCHAIN_NODE_API_KEY = import.meta.env.VITE_BLOCKCHAIN_NODE_API_KEY;

const Web3Provider = ({ children }) => {
  const location = useLocation();
  const [web3provider, setWeb3Provider] = useState(null);
  const [contract, setContract] = useState(null);
  const dispatch = useDispatch();
  const { ...user } = useSelector((state) => state.user);
  console.log("user", user);
  useEffect(() => {
    const wallet = localStorage.getItem("wallet");

    if (wallet && window.ethereum) {
      // Reconectar usando Metamask
      const reconnect = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setWeb3Provider(provider);
        const network = await provider.getNetwork();
        if (network.chainId === 84532n) {
          await syncUserWithBackend(wallet);
          dispatch(setIsConnected(true));
        } else {
          HPopUp({
            message: "Switch to Base Sepolia and refresh the page!",
            type: "error",
          });
        }
      };
      reconnect();
    } else {
      // Si no hay wallet guardada, usá el RPC público
      const rpcProvider = new ethers.JsonRpcProvider(
        `https://rpc.ankr.com/eth_sepolia/${BLOCKCHAIN_NODE_API_KEY}`,
        {
          chainId: 11155111,
          name: "Base Sepolia",
        }
      );
      setWeb3Provider(rpcProvider);
    }
  }, []);

  useEffect(() => {
    if (!web3provider) return;

    let contractABI = "";
    let contractAddress = "";

    if (location.pathname === "/nft-list") {
      contractABI = BRAINER_BPC_NFT_ABI_CONTRACT.abi;
      contractAddress = BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS;
    } else if (location.pathname === "/token-details") {
      contractAddress = BRAINER_PRESALE_CONTRACT_ADDRESS;
      contractABI = BRAINER_PRESALE_ABI_CONTRACT.abi;
    }

    if (contractABI) {
      const instance = new ethers.Contract(
        contractAddress,
        contractABI,
        web3provider
      );
      setContract(instance);
    }
  }, [location.pathname, web3provider]);

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
      const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
      const network = await eth_web3_provider.getNetwork();
      await syncUserWithBackend(accounts[0]);

      if (network.chainId !== 84532n) {
        HPopUp({
          message:
            "Please switch to the Base Sepolia network and refresh the page.",
          type: "error",
        });
        dispatch(setIsConnected(true));
        return;
      }
      HPopUp({
        message: "Wallet connected successfully.",
        type: "success",
      });

      localStorage.setItem("wallet", accounts[0]);
      setWeb3Provider(eth_web3_provider);
      dispatch(setIsConnected(true));
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
    HPopUp({
      message: "Wallet disconnected successfully.",
      type: "success",
    });
    localStorage.removeItem("web3provider");
    dispatch(setIsConnected(false));
    dispatch(setUserData({}));
  };

  const syncUserWithBackend = async (wallet) => {
    if (!wallet) return;
    try {
      const user = await BrainerOnBaseService.getUserByWallet(wallet);
      dispatch(setUserData({ ...user, isConnected: true }));
    } catch (error) {
      // Si no existe, lo creamos
      try {
        const newUser = await BrainerOnBaseService.createUser(wallet, wallet);
        dispatch(setUserData({ ...newUser, isConnected: true }));
      } catch (createError) {
        console.error("❌ Error creating user:", createError.message);
        HPopUp({ message: "Error al crear el usuario", type: "error" });
      }
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3provider,
        contract,
        setWeb3Provider,
        setContract,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
