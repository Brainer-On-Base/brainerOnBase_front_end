import React from "react";
import { StyledAstronautCard1, StyledAstronautCard2, StyledAstronautCard3, StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";
import NightBackground from "../NIghtBackground";
import { View } from "@react-three/drei";


export default function HistorySection() {

return <StyledHistorySection id="history">

    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column'}}>
        <h1  className={`animate__animated animate__fadeInDown animations`} >ABOUT</h1>
        {/* <h3  className={`animate__animated animate__fadeInDown animations`} >BRAINER</h3> */}
        <img src="./history.png" className={`animate__animated astronaut animations`} />
    </StyledFlexFullCenterContainer>

    <StyledAstronautCard1 className={`animate__animated animate__backInLeft animations `} >
      <h2>4% TAX</h2>
      <p> Funds collected are directed towards <span>BUYBACKS</span>, ensuring liquidity and facilitating <span>FUTURE LISTINGS</span> to enhance its global accessibility and utility. </p>
    </StyledAstronautCard1>
    <StyledAstronautCard2 className={`animate__animated animate__backInRight animations`} >
      <h2>WE ARE A FAMILY</h2>
      <p>We prioritize your <span>VOICE</span> and <span>IDEAS</span> above all. Join us in building a vibrant community where every member plays a vital role in our journey to the <span>MOON</span>.</p>
    </StyledAstronautCard2>
    <StyledAstronautCard3 className={`animate__animated animate__backInUp animations`} >
      <h2>LOCKED LP</h2>
      <p> Our locked liquidity pool feature <span>SAFEGUARDS</span> investor assets by securely locking liquidity, promoting <span>CONFIDENCE</span> and <span>STABILITY</span> in the market.</p>
    </StyledAstronautCard3>



    {/* <img src="./spaceship.png"  className={"img1"} />
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
      </BubbleDialog> */}
    </StyledHistorySection>;
}
