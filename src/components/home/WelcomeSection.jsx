import React, { useEffect, useState } from "react";
import { StyledAddressContainer, StyledWelcomeSection2 } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import useModals from "../../hooks/useSweetAlert";
import { APP_TEXTS } from "../../APP_TEXTS";
import { ethers } from 'ethers';

export default function WelcomeSection() {
  const {showPopUp, useTextModal} = useModals()

  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
      if (window.ethereum) {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
      } else {
          alert("Por favor, instala MetaMask.");
      }
  };

  const mintNFT = async () => {
      setLoading(true);
      try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, MyNFTCollection.abi, signer);

          const transaction = await contract.mintNFT(account);
          await transaction.wait();
          alert("NFT minting successful!");
      } catch (error) {
          console.error(error);
          alert("Error en el minting");
      } finally {
          setLoading(false);
      }
  };

  return <StyledWelcomeSection2 style={{alignItems:'flex-start'}}>

    {/* <img src="rocket.png" className="baloon"/> */}

    <div className="home-text-container">
      <div>
        <h1 className={'animate__animated animate__backInDown'}>BRAINER</h1>
        <h1 className={'animate__animated animate__fadeInDown animate__delay-1s'}>N BASE</h1>
        <h1 className={'animate__animated animate__fadeIn animate__delay-1s '}>ARE YOU A NO <span>BRAINER</span>?</h1>
        <StyledButton 
        size={'2em'} 
        className={'animate__animated animate__fadeIn animate__delay-2s'}
        onClick={() => useTextModal({
          textButton: APP_TEXTS.HOME_MODAL_TEXT_BUTTON,
          title:APP_TEXTS.HOME_MODAL_TITLE,
          text: APP_TEXTS.HOME_MODAL_DESCRIPTION, 
          textColor: 'white',
          onConfirmFunction:  async () =>  await mintNFT()
        })} 
        
        >
          {APP_TEXTS.HOME_BUTTON_1}
        </StyledButton>
        {/* <StyledButton 
        onClick={()=>  showPopUp({text:'Liquidity pool is not available yet', icon:'warning'})}
        size={'2em'} className={'animate__animated animate__fadeIn animate__delay-2s'}>
          CHARTS
        </StyledButton> */}
      </div>
      <img src="moon.png" className="moon"/>

    </div>
  </StyledWelcomeSection2>;
}
