import React from "react";
import { StyledCard, StyledCardSection } from "../styled-components/container";

export default function CardsSection() {
  return (
  <StyledCardSection>
    <StyledCard>
        <h2>COMMUNITY & DROPS</h2>
        <p>Join our <span>COMMUNITY</span> and participate in <span>AIRDROPS</span>! Get involved and receive tokens simply by being an active member of our <span>COMMUNITY</span>. 
        Engage with fellow members, share your thoughts, and stay up-to-date with the latest developments.</p>
    </StyledCard>
    <StyledCard>
        <h2>INCENTIVES & REWARDS</h2>
        <p><span>EARN rewards</span> for your contributions! Whether you're creating engaging content, participating in contests, or spreading the word about our project,
            we want to reward you for your efforts. Explore various ways to <span>EARN TOKENS</span> and be part of our growing ecosystem.</p>
    </StyledCard>
    <StyledCard>
        <h2>LIQUIDITY & MARKETS</h2>
        <p>Liquidity and accessibility! We allocate a significant portion of our token supply to ensure ample liquidity on exchanges. 
            This facilitates <span>SMOOTH TRADING EXPERIENCES</span> for our users and supports the growth of our token in various markets.</p>
    </StyledCard>
    <StyledCard>
        <h2>DEVELOPMENT TEAM</h2>
        <p> Meet our dedicated development team! Our talented developers are committed to <span>BUILDING</span> and <span>IMPROVING</span> our project. 
            With years of <span>EXPERIENCE</span> in the industry, they work tirelessly to deliver innovative solutions and drive the success of our platform.</p>
    </StyledCard>
  </StyledCardSection>);
}
