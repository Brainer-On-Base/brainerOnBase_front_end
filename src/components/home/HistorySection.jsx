import React, { useEffect, useState } from "react";
import { StyledAstronautCard, StyledAstronautCard1, StyledAstronautCard2, StyledAstronautCard3, StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";
import BubbleDialog from "../BubbleDialog";
import { Canvas } from "@react-three/fiber";
import NightBackground from "../NIghtBackground";
import { View } from "@react-three/drei";
import handleAnimationScroll from "../../hooks/handleAnimationScroll";


export default function HistorySection() {
  const {isVisible} = handleAnimationScroll('.animations')

  
  return <StyledHistorySection>
          <View
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}
        >

        <NightBackground/>
    </View>
    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column'}}>
        <h1  className={`animate__animated ${isVisible[0] ? 'animate__fadeInDown' : ''} animations`} style={{visibility: isVisible[0] ? 'visible' : 'hidden'}}>ABOUT</h1>
        <img src="./history.png" className={`animate__animated ${isVisible[1] ? 'astronaut' : ''} animations`} style={{visibility: isVisible[1] ? 'visible' : 'hidden'}} />
    </StyledFlexFullCenterContainer>

    <StyledAstronautCard1 className={`animate__animated ${isVisible[2] ? 'animate__backInLeft' : ''} animations`} style={{visibility: isVisible[2] ? 'visible' : 'hidden'}}>
      <h2>4% TAX</h2>
      <p> Funds collected are directed towards <span>BUYBACKS</span>, ensuring liquidity and facilitating <span>FUTURE LISTINGS</span> to enhance its global accessibility and utility. </p>
    </StyledAstronautCard1>
    <StyledAstronautCard2 className={`animate__animated ${isVisible[3] ? 'animate__backInRight' : ''} animations`} style={{visibility: isVisible[3] ? 'visible' : 'hidden'}}>
      <h2>WE ARE A FAMILY</h2>
      <p>We prioritize your <span>VOICE</span> and <span>IDEAS</span> above all. Join us in building a vibrant community where every member plays a vital role in our journey to the <span>MOON</span>.</p>
    </StyledAstronautCard2>
    <StyledAstronautCard3 className={`animate__animated ${isVisible[4] ? 'animate__backInUp' : ''} animations`} style={{visibility: isVisible[4] ? 'visible' : 'hidden'}}>
      <h2>LOCKED LP</h2>
      <p> Our locked liquidity pool feature <span>SAFEGUARDS</span> investor assets by securely locking liquidity, promoting <span>CONFIDENCE</span> and <span>STABILITY</span> in the market.</p>
    </StyledAstronautCard3>



    <img src="./spaceship.png"  className={"img1"} />
      <BubbleDialog
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: '240px'
        }}
        positionStyle={{
          bottom: '-20px',
          right: '40px'
        }}
        width="400px"
      >
          <p>Take a look to our <span>TOKENOMICS</span> to clarify your doubts!</p>
          <p> We are a <span>REAL</span> community  token!</p>
      </BubbleDialog>
    </StyledHistorySection>;
}
