import React, { useState } from 'react';
import { BRAINER_BPC_NFT_ABI_CONTRACT, BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS } from '../CONSTANTS';
import useModals from './useSweetAlert';
import AccountContext from '../provider/AccountProvider/AccountContext';
import { ethers } from 'ethers';

const UseContract = () => {
    const { account, setAccount, web3provider, setWeb3Provider } = React.useContext(AccountContext);
    const [uri, setUri] = useState("");
    const { showPopUp } = useModals();

    const connectWallet = async () => {
        if (!window.ethereum) {
            showPopUp({ text: "Metamask is not installed", icon: "error" });
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            showPopUp({ text: "Wallet connected!", icon: "success" });

            // Utiliza BrowserProvider en ethers v6
            const eth_web3_provider = new ethers.BrowserProvider(window.ethereum);
            setWeb3Provider(eth_web3_provider);
        } catch (error) {
            showPopUp({ text: "Error while connecting with Metamask. Try again later", icon: "error" });
            console.error(error);
        }
    };

    const disconnectWallet = () => {
        setAccount(null);
        showPopUp({ text: "Wallet disconnected.", icon: "info" });
    };

    const mint_BPC1_NFT = async () => {
        if (!web3provider) {
            alert("Please connect your wallet first.");
            return;
        }

        try {
            const signer = await web3provider.getSigner();
            const nftContract = new ethers.Contract(BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS, BRAINER_BPC_NFT_ABI_CONTRACT.abi, signer);

            // Llama a la función de minting y espera la transacción
            const tx = await nftContract.mintNFT(account, uri, { value: ethers.parseEther("0.01") });
            await tx.wait();
            showPopUp({ text: "NFT minted successfully!", icon: "success" });
        } catch (error) {
            console.error("Error minting NFT:", error);
            showPopUp({ text: "Error minting NFT. Try again later", icon: "error" });
        }
    };

    return {
        connectWallet,
        disconnectWallet,
        mint_BPC1_NFT,
        account,
        web3provider
    };
};

export default UseContract;
