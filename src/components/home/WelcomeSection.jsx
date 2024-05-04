import React from "react";
import { StyledWelcomeSection } from "../styled-components/container";

export default function WelcomeSection() {

  return <StyledWelcomeSection style={{alignItems:'flex-start'}}>
    
    <div className="bottom-image-container">
        <img src="Designer (4).png"/>
        <img src="Designer (8).png"/>
    </div>
  </StyledWelcomeSection>;
}
