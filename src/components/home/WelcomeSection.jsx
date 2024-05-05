import React, { useState } from "react";
import { StyledWelcomeSection } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog";

export default function WelcomeSection() {
  const [activeBubble, setActiveBubble] = useState(false);


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
            bottom: '10px',
            right: '20px'
          }}
          width="320px"
        >
          <p>Hey! What are you waiting for to <span>BRAINS</span> up your wallet?!</p>
        </BubbleDialog>
        {/* <img src="Designer (8).png"/> */}
    {/* </div> */}
  </StyledWelcomeSection>;
}
