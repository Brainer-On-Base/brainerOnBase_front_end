import React, { useState } from 'react';
import { BRAINER_BPC_NFT_ABI_CONTRACT, BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS } from '../CONSTANTS';
import useModals from './useSweetAlert';
import AccountContext from '../provider/AccountProvider/AccountContext';

const UseContract = () => {
    const { account, setAccount, web3provider, setWeb3Provider } = React.useContext(AccountContext);
    const [uri, setUri] = useState("");
    const { showPopUp } = useModals();

    const connectWallet = async () => {
        if (!ethereum) {
            showPopUp({ text: "Metamask is not installed", icon: "error" });
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
            const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
            setWeb3Provider(tempProvider);
          } catch (error) {
            showPopUp({ text: "Error while connecting with metamask. Try again later", icon: "error" });
            console.error(err);
        }
    };


    const disconnectWallet = () => {
        setAccount(null);
        showPopUp({ text: "Wallet disconnected.", icon: "info" });
      };
    

    const mint_BPC1_NFT = async () => {
        // Conectar el contrato de NFT
        const signer = web3provider.getSigner();
        const nftContract = new ethers.Contract(BRAINER_BPC_NFT_MINT_CONTRACT_ADDRESS, BRAINER_BPC_NFT_ABI_CONTRACT, signer);

        try {
            nftContract.mintNFT(account, uri, { value: ethers.utils.parseEther("0.01") });
            await tx.wait();
             alert("NFT minted successfully!");
        } catch (error) {
            console.error("Error minting NFT:", error);
            alert("Error minting NFT. Check the console for details.");
        }
    };





    return (
        {
            connectWallet,
            disconnectWallet,
            mint_BPC1_NFT
        }
    );
}

export default UseContract;
