import React from "react";
import { StyledFlexCenterContainer, StyledFooterSection } from "./styled-components/container";

export default function Footer() {
  return (
    <StyledFooterSection>
      <strong>Disclaimer: Not Financial Advice</strong>
      <p style={{width: '50%'}}>
        <span>BRAINER</span> is a community-driven project created purely for entertainment purposes.
      </p>

      <p>
      We're <span>BUILDING</span> for the fun of it, and for all of us.
      </p>
      <StyledFlexCenterContainer style={{ justifyContent: 'center' }}>
        <img src="./brainerCoin.png" alt="Brainer Coin Logo" />
        <p id="copyright" style={{ margin: '10px' }}>
          Copyright © 2024. All rights reserved. - braineronbase@gmail.com
        </p>
        <img src="./brainerCoin.png" alt="Brainer Coin Logo" />
      </StyledFlexCenterContainer>
    </StyledFooterSection>
  );
}