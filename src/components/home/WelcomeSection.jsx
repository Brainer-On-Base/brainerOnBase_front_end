import React, { useEffect, useState } from "react";
import { StyledWelcomeSection } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog";
import NightBackground from "../NIghtBackground";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

export default function WelcomeSection() {


  return <StyledWelcomeSection style={{alignItems:'flex-start', overflow: 'hidden'}}>
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
    <img src="moon.png" className="moon"/>
    <img src="rocket.png" className="baloon"/>

    <div className="home-text-container">
      <h1>BRAINER</h1>
      <h1>ON BASE</h1>
      <h1 className={'animate__animated animate__backInRight'}>ARE YOU A NO <span>BRAINER</span>?</h1>
      <StyledButton size={'2em'} className={'animate__animated animate__bounceIn animate__delay-1s'}>
        GET PRE SALE
      </StyledButton>
    </div>
  </StyledWelcomeSection>;
}
