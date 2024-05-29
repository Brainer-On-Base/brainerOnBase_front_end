import React from "react";
import { StyledFlexCenterContainer, StyledNavbarContainer } from "./styled-components/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
  
    return (
        <StyledNavbarContainer>
            <StyledFlexCenterContainer>
                <img src="./brainerCoin.png" onClick={() => navigate('/home')} style={{cursor:'pointer'}}/>
                <a href="/">BRAINER</a>
            </StyledFlexCenterContainer>
            <StyledFlexCenterContainer style={{width: 'auto', margin: '2em'}}>
                <FontAwesomeIcon icon={faTelegram} size="1x" title="Join our Telegram"/>
                <FontAwesomeIcon onClick={() => window.open('https://twitter.com/BrainerOnBase')} icon={faTwitter} size="1x" style={{background: 'transparent'}} title="Follow on twitter"/>
            </StyledFlexCenterContainer>
        </StyledNavbarContainer>)
}
