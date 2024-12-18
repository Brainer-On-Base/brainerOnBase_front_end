import React from "react";
import { StyledCard, StyledTokenomicsSection } from "../styled-components/container";
import handleAnimationScroll from "../../hooks/handleAnimationScroll";
import BubbleDialog from "../BubbleDialog";
import { motion } from 'framer-motion';

export default function TokenomicsSection() {
const { isVisible } = handleAnimationScroll('.target')
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
  <StyledTokenomicsSection id="tokenomics">
    <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }} // 1s delay after entering viewport
    >
        TOKENOMICS
    </motion.h2>
    <StyledCard className={`animate__animated ${isVisible[0] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[0] ? 'visible' : 'hidden', alignItems:'center'}}>
      <div>
        <h2>LIQUIDITY & MARKETS</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>65% - 6.500.000.000</p>
        <p>Liquidity and accessibility! We allocate a significant portion of our token supply to ensure ample liquidity on exchanges. 
        This facilitates <span>SMOOTH TRADING EXPERIENCES</span> for our users and supports the growth of our token in various markets.</p>
      </div>
      <img style={{marginRight: 0}} src="./trading.png"/>
    </StyledCard>
    
    <StyledCard className={`animate__animated ${isVisible[1] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[1] ? 'visible' : 'hidden', alignItems:'center'}}>
      <img style={{marginLeft: 0}} src="./rewards2.png"/>
      <div>
        <h2>PLAY & EARN</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>15% - 1,500,000,000</p>
        <p>Join our <span>SOCIETY</span> and dive into our <span>GAME</span>! Discover a exciting way to <span>EARN TOKENS</span> by playing in our society. <span>INVITE</span> friends and explore our <span>WORLD</span>. </p>
      </div>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[2] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[2] ? 'visible' : 'hidden', alignItems:'center'}}>
      <div>
        <h2>DEVELOPMENT TEAM</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>10% - 1.000.000.000</p>
        <p> Our talented developers are committed to <span>BUILDING</span> and <span>IMPROVING</span> our <span>SOCIETY</span>. 
            With years of <span>EXPERIENCE</span> in the industry, they work tirelessly to deliver innovative solutions and drive the success of our <span>WORLD</span>.</p>
      </div>
      <img style={{marginRight: 0}} src="./development.png"/>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[3] ? 'animate__backInRight' : ''} target`} style={{visibility: isVisible[3] ? 'visible' : 'hidden', alignItems:'center'}}>
    <img style={{marginLeft: 0}} src="./marketingBrain.png"/>
      <div>
        <h2>MARKETING & PROMOTION</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>5% - 500.000.000</p>
        <p>Spread the word and be part of our journey! <span>Marketing</span> plays a crucial role in increasing awareness and adoption of our project. 
          From social media campaigns to <span>STRATEGIC PARTNERSHIPS</span>, we invest in various marketing initiatives to reach new audiences and promote <span>OUR VISION</span>.</p>
      </div>
    </StyledCard>
    <StyledCard className={`animate__animated ${isVisible[4] ? 'animate__backInLeft' : ''} target`} style={{visibility: isVisible[4] ? 'visible' : 'hidden', alignItems:'center'}}>
      <div>
        <h2>TOKEN BURNING</h2>
        <p style={{marginTop: '-40px', marginBottom: '2em'}}>5% - 500.000.000</p>
        <p>Enhance token value through <span>BURNING</span>! We believe in maintaining a healthy <span>TOKEN ECONOMY</span> by periodically burning a portion of our tokens. 
          This reduces the total supply in circulation, potentially increasing the value of remaining tokens over time. 
          Join us as we strive to create value for our token holders through strategic <span>TOKEN MANAGMENT</span>.</p>
      </div>
      <img style={{marginRight: 0}} src="./burning.png"/>

    </StyledCard>
  </StyledTokenomicsSection>);
}
