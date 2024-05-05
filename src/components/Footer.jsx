import React from "react";
import { StyledFlexCenterContainer, StyledFooterSection } from "./styled-components/container";

export default function Footer() {
  return <StyledFooterSection>
    <strong>Financial Disclaimer</strong>
    <p style={{width: '70%'}}>
        <span>BRAINER</span> is a meme cryptocurrency project with no intrinsic value or expectation of financial return. 
    </p>
    <p>
        The <span>BRAINER</span> project is 100% community lead and there is no formal team or roadmap yet. The <span>BRAINER TOKEN</span> is completely for entertainment purposes only.
    </p>
        <p>We're <span>BUILDING</span></p>
    <StyledFlexCenterContainer style={{justifyContent:'center'}}>
        <img src="./brainerCoin.png"/>
        <p id="copyright" style={{margin: '10px'}}>
    Copyright © 2024. All rights reserved. - brainer@gmail.com
    </p>
    <img src="./brainerCoin.png"/>
    </StyledFlexCenterContainer>

  </StyledFooterSection>;
}
