import React, { useEffect, useState } from "react";
import { StyledWelcomeSection } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog";
import NightBackground from "../NIghtBackground";
import { Canvas } from "@react-three/fiber";

export default function WelcomeSection() {
  const [activeBubble, setActiveBubble] = useState(false);
  const [activeBubble2, setActiveBubble2] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setActiveBubble(true);
      }, 1000);

      // Limpiar el temporizador cuando el componente se desmonte o activeBubble cambie a true
      return () => clearTimeout(timeoutId);
    }, []); // Ejecutar solo una vez al montar el componente


  return <StyledWelcomeSection style={{alignItems:'flex-start', overflow: 'hidden'}}>
    {/* <Canvas
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
        camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 0, 0, 6 ]
          } }
        >
        <ambientLight intensity={ 1.5 } />
        <NightBackground/>
    </Canvas> */}

    <img src="Designer (59) flip (1).png" className="baloon"/>

    <div className="home-text-container">
      <h1 className={'animate__animated animate__backInRight'}>ARE YOU A NO <span>BRAINER</span>?</h1>
      <StyledButton size={'2em'} className={'animate__animated animate__bounceIn animate__delay-1s'}>
        GET PRE SALE
      </StyledButton>
    </div>
    
    {/* <div className="bottom-image-container"> */}
        {/* <img src="Designer (4).png" onClick={() => setActiveBubble(!activeBubble)} className={'animate__animated animate__fadeInUp animate__delay-1s'}/>
        <BubbleDialog
          className={'animate__animated animate__fadeInUp animate__delay-1s bubble bubble-1500'}
          active={activeBubble}
          positionStyle={{
            bottom: '50px',
            left: '300px'
          }}
          width="400px"
        >
          <p className="letter-animation">Hey! What are you waiting for to <span>BRAIN</span> up your wallet?!</p>
        </BubbleDialog> */}
        {/* <img src="Designer (8).png"/> */}
    {/* </div> */}
  </StyledWelcomeSection>;
}
