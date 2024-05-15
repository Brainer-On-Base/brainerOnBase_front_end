import React from "react";
import { StyledCard, StyledTokenomicsSection } from "../styled-components/container";
import handleAnimationScroll from "../../hooks/handleAnimationScroll";
import BubbleDialog from "../BubbleDialog";

export default function TokenomicsSection() {
const { isVisible } = handleAnimationScroll('.target')

  return (
  <StyledTokenomicsSection>
    <StyledCard className={`animate__animated ${isVisible[0] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[0] ? 'visible' : 'hidden'}}>
      <div>
        <h2>LIQUIDITY & MARKETS</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>60% - 6.000.000.000</p>
        <p>Liquidity and accessibility! We allocate a significant portion of our token supply to ensure ample liquidity on exchanges. 
        This facilitates <span>SMOOTH TRADING EXPERIENCES</span> for our users and supports the growth of our token in various markets.</p>
      </div>
      <img src="./trading.png"/>
    </StyledCard>
    
    <StyledCard className={`animate__animated ${isVisible[1] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[1] ? 'visible' : 'hidden'}}>
      <img src="./rewards2.png"/>
      <div>
        <h2>COMMUNITY & REWARDS</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>15% - 1.500.000.000</p>
        <p>Join our <span>COMMUNITY</span> and participate in <span>AIRDROPS</span>! Explore various ways to <span>EARN TOKENS</span> creating engaging content, participating in contests, or spreading the word about our project. Be part of our growing ecosystem.</p>
      </div>

    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[2] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[2] ? 'visible' : 'hidden'}}>
      <div>
        <h2>DEVELOPMENT TEAM</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>10% - 1.000.000.000</p>
        <p> Meet our dedicated development team! Our talented developers are committed to <span>BUILDING</span> and <span>IMPROVING</span> our project. 
            With years of <span>EXPERIENCE</span> in the industry, they work tirelessly to deliver innovative solutions and drive the success of our platform.</p>
      </div>
      <img src="./development.png"/>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[3] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[3] ? 'visible' : 'hidden'}}>
    <img src="./marketingBrain.png"/>
      <div>
        <h2>MARKETING & PROMOTION</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>10% - 1.000.000.000</p>
        <p>Spread the word and be part of our journey! <span>Marketing</span> plays a crucial role in increasing awareness and adoption of our project. 
          From social media campaigns to <span>STRATEGIC PARTNERSHIPS</span>, we invest in various marketing initiatives to reach new audiences and promote <span>OUR VISION</span>.</p>
      </div>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[4] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[4] ? 'visible' : 'hidden'}}>
      <div>
        <h2>TOKEN BURNING</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>5% - 500.000.000</p>
        <p>Enhance token value through <span>BURNING</span>! We believe in maintaining a healthy <span>TOKEN ECONOMY</span> by periodically burning a portion of our tokens. 
          This reduces the total supply in circulation, potentially increasing the value of remaining tokens over time. 
          Join us as we strive to create value for our token holders through strategic <span>TOKEN MANAGMENT</span>.</p>
      </div>
      <img src="./burning.png"/>

    </StyledCard>
  </StyledTokenomicsSection>);
}
