import React, { useEffect, useState } from "react";
import { StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";
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
        <img src="./history.png" className="astronaut" />
        <h1>BRAINER</h1>
        <h1>ON BASE</h1>
    </StyledFlexFullCenterContainer>



    <img src="./tokenomic.png"  className={"img1"}/>
      <BubbleDialog
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: '240px'
        }}
        positionStyle={{
          bottom: '40px',
          right: '40px'
        }}
        width="400px"
      >
          <p>Take a look to our <span>TOKENOMICS</span> to clarify your doubts!</p>
          <p> We are a <span>REAL</span> community  token!</p>
      </BubbleDialog>
    </StyledHistorySection>;
}
