import React from "react";
import { StyledAstronautCard1, StyledAstronautCard2, StyledAstronautCard3, StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";

export default function RoadmapSection() {

return <StyledHistorySection id="history">

    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column'}}>
        <h1  className={`animate__animated animate__fadeInDown animations`} >ROADMAP</h1>
        {/* <h3  className={`animate__animated animate__fadeInDown animations`} >BRAINER</h3> */}
        <img src="./history.png" className={`animate__animated astronaut animations`} />
    </StyledFlexFullCenterContainer>


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
