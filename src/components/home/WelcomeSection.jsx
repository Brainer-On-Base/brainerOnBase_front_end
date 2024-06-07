import React, { useEffect, useState } from "react";
import { StyledAddressContainer, StyledWelcomeSection2 } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog";
import NightBackground from "../NIghtBackground";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { View } from "@react-three/drei";
import useModals from "../../hooks/useSweetAlert";

export default function WelcomeSection() {
  const {showPopUp, useTextModal} = useModals()


  return <StyledWelcomeSection2 style={{alignItems:'flex-start'}}>
      <View
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}

        >
        <NightBackground/>
    </View>
    {/* <img src="rocket.png" className="baloon"/> */}

    <div className="home-text-container">
      <div>
        <h1 className={'animate__animated animate__backInDown'}>BRAINER</h1>
        <h1 className={'animate__animated animate__fadeInDown animate__delay-1s'}>ON BASE</h1>
        <h1 className={'animate__animated animate__fadeIn animate__delay-1s '}>ARE YOU A NO <span>BRAINER</span>?</h1>
        <StyledButton 
        size={'2em'} 
        className={'animate__animated animate__fadeIn animate__delay-2s'}
        onClick={() => useTextModal({
          textButton: 'JOIN SOCIETY',
          title:'PRE SALE',
          text: `
          <p>COST: 0.02 ETH</p>
          <p>Get a spot on the <span id="colorpink">PRE SALE</span> list and earn early access to our <span id="colorpink">SOCIETY</span></p> 
          <p>You're one step away from stopping being a <span id="colorpink">NO BRAINER</span>.</p>`, 
          textColor: 'white'
        })} 
        
        >
          PRE SALE
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
