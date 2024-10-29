import React from "react";
import { StyledFlexCenterContainer, StyledFooterSection } from "./styled-components/container";

export default function Footer() {
  return <StyledFooterSection>
    <strong>Financial Disclaimer</strong>
    {/* <p style={{width: '70%'}}>
        <span>BRAINER</span> is a meme cryptocurrency project with no intrinsic value or expectation of financial return. 
    </p> */}
    <p>
        The <span>BRAINER</span> project is 100% community lead.
    </p>
        <p>We're <span>BUILDING</span> for us.</p>
    <StyledFlexCenterContainer style={{justifyContent:'center'}}>
        <img src="./brainerCoin.png"/>
        <p id="copyright" style={{margin: '10px'}}>
    Copyright © 2024. All rights reserved. - braineronbase@gmail.com
    </p>
    <img src="./brainerCoin.png"/>
    </StyledFlexCenterContainer>

  </StyledFooterSection>;
}
