import React, { useState } from 'react';
import { BRAINER_BPC_NFT_ABI_CONTRACT, BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS } from '../CONSTANTS';
import useModals from './useSweetAlert';
import AccountContext from '../provider/AccountProvider/AccountContext';
import { ethers } from 'ethers';
import { useEffect } from 'react';

const UseContract = () => {
    const { account, setAccount, web3provider, setWeb3Provider, isConnected } = React.useContext(AccountContext);
    const [uri, setUri] = useState("");
    const { showPopUp } = useModals();


    useEffect(() => {
        if(web3provider) {
            getQuantityminted()
        }
    }, [account])

    const getQuantityminted = async () => await getMintedCount()
    

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

    const mint_BPC1_NFT = async (uri) => {
        if (!web3provider) {
            showPopUp({ text: "Connect your wallet first.", icon: "warning" });
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

    const getMintedCount = async () => {
        if (!web3provider) return;
        
        try {
            const nftContract = new ethers.Contract(BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS, BRAINER_BPC_NFT_ABI_CONTRACT.abi, web3provider);
            const mintedCount = await nftContract.currentTokenId();

            showPopUp({ text: `Total NFTs minted: ${mintedCount}`, icon: "info" });
            return mintedCount;
        } catch (error) {
            console.error("Error fetching minted count:", error);
            showPopUp({ text: "Error fetching minted count. Try again later", icon: "error" });
        }
    };

    return {
        connectWallet,
        disconnectWallet,
        mint_BPC1_NFT,
        account,
        web3provider,
        getMintedCount,
        isConnected
    };
};

export default UseContract;
