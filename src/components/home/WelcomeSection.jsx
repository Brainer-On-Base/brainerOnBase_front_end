import React, { useEffect, useState } from "react";
import { StyledAddressContainer, StyledWelcomeSection2 } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog";
import NightBackground from "../NIghtBackground";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { View } from "@react-three/drei";
import useModals from "../../hooks/useSweetAlert";
import { APP_TEXTS } from "../../APP_TEXTS";

export default function WelcomeSection() {
  const {showPopUp, useTextModal} = useModals()


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
          textColor: 'white'
        })} 
        
        >
          {APP_TEXTS.HOME_BUTTON_1}
        </StyledButton>
        <StyledButton 
        onClick={()=>  showPopUp({text:'Liquidity pool is not available yet', icon:'warning'})}
        size={'2em'} className={'animate__animated animate__fadeIn animate__delay-2s'}>
          CHARTS
        </StyledButton>
      </div>
      <img src="moon.png" className="moon"/>

    </div>
  </StyledWelcomeSection2>;
}
