import React, { useEffect, useState } from "react";
import { StyledCard, StyledCardSection } from "../styled-components/container";
import VisibilitySensor from 'react-visibility-sensor';
import classNames from 'classnames'; // Esta librería es útil para manejar múltiples clases CSS de forma condicional
import handleAnimationScroll from "../../hooks/handleAnimationScroll";

export default function CardsSection() {
const { isVisible } = handleAnimationScroll('.target')

  return (
  <StyledCardSection>
    <StyledCard className={`animate__animated ${isVisible[0] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[0] ? 'visible' : 'hidden'}}>
      <div>
        <h2>COMMUNITY & DROPS</h2>
        <p>Join our <span>COMMUNITY</span> and participate in <span>AIRDROPS</span>! Get involved and receive tokens simply by being an active member of our <span>COMMUNITY</span>. 
        Engage with fellow members, share your thoughts, and stay up-to-date with the latest developments.</p>
      </div>
      <img src="./Designer (26).png"/>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[1] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[1] ? 'visible' : 'hidden'}}>
      <img src="./Designer (25).png"/>
      <div>

        <h2>INCENTIVES & REWARDS</h2>
        <p><span>EARN rewards</span> for your contributions! Whether you're creating engaging content, participating in contests, or spreading the word about our project,
            we want to reward you for your efforts. Explore various ways to <span>EARN TOKENS</span> and be part of our growing ecosystem.</p>
      </div>
    </StyledCard>
    
    <StyledCard className={`animate__animated ${isVisible[2] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[2] ? 'visible' : 'hidden'}}>
      <div>
        <h2>LIQUIDITY & MARKETS</h2>
        <p>Liquidity and accessibility! We allocate a significant portion of our token supply to ensure ample liquidity on exchanges. 
            This facilitates <span>SMOOTH TRADING EXPERIENCES</span> for our users and supports the growth of our token in various markets.</p>
      </div>
      <img src="./Designer (28).png"/>

    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[3] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[3] ? 'visible' : 'hidden'}}>
      <img src="./Designer (55).png"/>
      <div>
        <h2>DEVELOPMENT TEAM</h2>
        <p> Meet our dedicated development team! Our talented developers are committed to <span>BUILDING</span> and <span>IMPROVING</span> our project. 
            With years of <span>EXPERIENCE</span> in the industry, they work tirelessly to deliver innovative solutions and drive the success of our platform.</p>
      </div>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[4] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[4] ? 'visible' : 'hidden'}}>
      <div>
        <h2>MARKETING & PROMOTION</h2>
        <p>Spread the word and be part of our journey! <span>Marketing</span> plays a crucial role in increasing awareness and adoption of our project. 
          From social media campaigns to <span>STRATEGIC PARTNERSHIPS</span>, we invest in various marketing initiatives to reach new audiences and promote <span>OUR VISION</span>.</p>
      </div>
      <img src="./marketingBrain.png"/>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[5] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[5] ? 'visible' : 'hidden'}}>
      <img src="./burning.png"/>
      <div>
        <h2>TOKEN BURNING</h2>
        <p>Enhance token value through <span>BURNING</span>! We believe in maintaining a healthy <span>TOKEN ECONOMY</span> by periodically burning a portion of our tokens. 
          This reduces the total supply in circulation, potentially increasing the value of remaining tokens over time. 
          Join us as we strive to create value for our token holders through strategic <span>TOKEN MANAGMENT</span>.</p>
      </div>
    </StyledCard>
  </StyledCardSection>);
}
