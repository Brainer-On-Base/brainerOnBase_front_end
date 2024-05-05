import React, { useEffect, useState } from "react";
import { StyledWelcomeSection } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog";

export default function WelcomeSection() {
  const [activeBubble, setActiveBubble] = useState(false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setActiveBubble(false);
      }, 6000);

      // Limpiar el temporizador cuando el componente se desmonte o activeBubble cambie a true
      return () => clearTimeout(timeoutId);
    }, [activeBubble]); // Ejecutar solo una vez al montar el componente

    useEffect(() => {
            // Cambiar activeBubble a true después de 5 segundos
     setTimeout(() => {
      setActiveBubble(true);
    }, 1000);

    }, []);


  return <StyledWelcomeSection style={{alignItems:'flex-start'}}>
    <div className="home-text-container">
      <h1>ARE YOU A NO BRAINER?</h1>
      <StyledButton size={'2em'}>
        GET PRE SALE
      </StyledButton>
    </div>
    
    {/* <div className="bottom-image-container"> */}
        <img src="Designer (4).png" onClick={() => setActiveBubble(!activeBubble)}/>
        <BubbleDialog
          active={activeBubble}
          positionStyle={{
            bottom: '300px',
            left: '0px'
          }}
          width="400px"
        >
          <p className="letter-animation">Hey! What are you waiting for to <span>BRAINS</span> up your wallet?!</p>
        </BubbleDialog>
        {/* <img src="Designer (8).png"/> */}
    {/* </div> */}
  </StyledWelcomeSection>;
}
