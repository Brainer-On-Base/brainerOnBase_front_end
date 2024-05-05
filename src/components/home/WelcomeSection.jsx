import React from "react";
import { StyledWelcomeSection } from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";

export default function WelcomeSection() {

  return <StyledWelcomeSection style={{alignItems:'flex-start'}}>
    <div className="home-text-container">
      <h1>ARE YOU A NO BRAINER?</h1>
      <StyledButton size={'2em'}>
        GET PRE SALE
      </StyledButton>
    </div>
    
    {/* <div className="bottom-image-container"> */}
        <img src="Designer (4).png"/>
        {/* <img src="Designer (8).png"/> */}
    {/* </div> */}
  </StyledWelcomeSection>;
}
