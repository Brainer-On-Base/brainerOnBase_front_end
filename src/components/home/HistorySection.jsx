import React, { useEffect, useState } from "react";
import { StyledAstronautCard, StyledAstronautCard1, StyledAstronautCard2, StyledAstronautCard3, StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";
import BubbleDialog from "../BubbleDialog";
import { Canvas } from "@react-three/fiber";
import NightBackground from "../NIghtBackground";


export default function HistorySection() {
  
  return <StyledHistorySection>
          <Canvas
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}
        camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 0, 0, 6 ]
          } }
        >

        <NightBackground/>
    </Canvas>
    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column'}}>
        <h1>ABOUT</h1>
        <img src="./history.png" className="astronaut" />
    </StyledFlexFullCenterContainer>

    <StyledAstronautCard1>
      <h2>4% TAX</h2>
      <p> Funds collected are directed towards <span>BUYBACKS</span>, ensuring liquidity and facilitating <span>FUTURE LISTINGS</span> to enhance its global accessibility and utility. </p>
    </StyledAstronautCard1>
    <StyledAstronautCard2>
      <h2>WE ARE A FAMILY</h2>
      <p>We prioritize your <span>VOICE</span> and <span>IDEAS</span> above all. Join us in building a vibrant ecosystem where every member plays a vital role in shaping our journey to the <span>MOON</span>.</p>
    </StyledAstronautCard2>
    <StyledAstronautCard3>
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
