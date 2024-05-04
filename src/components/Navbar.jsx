import React from "react";
import { StyledFlexCenterContainer, StyledNavbarContainer } from "./styled-components/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  
  
    return (
        <StyledNavbarContainer>
            <StyledFlexCenterContainer>
                <img src="./brainerCoin.png"/>
                <h1>BRAINER</h1>
            </StyledFlexCenterContainer>
            <StyledFlexCenterContainer style={{width: 'auto', margin: '2em'}}>
                <FontAwesomeIcon icon={faTelegram} size="1x" title="Join our Telegram"/>
                <FontAwesomeIcon icon={faTwitter} size="1x" title="Follow on twitter"/>
            </StyledFlexCenterContainer>
        </StyledNavbarContainer>)
}
