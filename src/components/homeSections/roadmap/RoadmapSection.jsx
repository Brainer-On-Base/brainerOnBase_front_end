import React from "react";
import GenericTitle from "../../GenericTitle/GenericTitle";
import { HBox, HTitle } from "../../../HocComponents";
import { FloatAnimation } from "../../NftDetails/NftDetails";
import {
  StyledRoadmapCard,
  StyledRoadmapSection,
} from "./roadmapSection.styled";

export default function RoadmapSection() {
  return (
    <StyledRoadmapSection id="roadmap" ship={0} width="100%">
      <HBox direction="column" width="100%" className="roadmap">
        <GenericTitle title="ROADMAP" />
        <img src="./spaceship.png" className={`img1 `} alt="spaceship" />
        <FloatAnimation>
          <StyledRoadmapCard
            direction="column"
            width="100%"
            align="flex-start"
            padding="20px 50px"
            background={"shadeViolet"}
            borderRadius={"20px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            border="1px solid gold"
          >
            <HTitle fontSize={"54px"} color={"white"}>
              Chapter 1
            </HTitle>
            <HTitle
              fontSize={"34px"}
              color="neonViolet"
              margin={"-0.8em 0 0 0"}
            >
              The rise of the Brainers
            </HTitle>
            <ul>
              <li>
                <img
                  src={"./commonBrainer.png"}
                  alt="Bullet Point"
                  className="bullet-icon"
                />
                <p className="text">
                  Social media campaign to generate buzz and spark{" "}
                  <span>community</span> engagement.
                </p>
              </li>
              <li>
                <img
                  src={"./commonBrainer.png"}
                  alt="Bullet Point"
                  className="bullet-icon"
                />
                <p className="text">
                  Creation of the <span>BRAINER SOCIETY</span> community.
                </p>
              </li>
              <li>
                <img
                  src={"./commonBrainer.png"}
                  alt="Bullet Point"
                  className="bullet-icon"
                />
                <p className="text">
                  Launch of the inaugural <span>NFT</span> collection in pixel
                  art.
                </p>
              </li>
              {/* <li><p className="text">Drop of the main NFT character.</p></li> */}
              <li>
                <img
                  src={"./commonBrainer.png"}
                  alt="Bullet Point"
                  className="bullet-icon"
                />
                <p className="text">
                  Creation of <span>$BRNR</span> token — the official currency
                  of Brainer Society.
                </p>
              </li>
              <li>
                <img
                  src={"./commonBrainer.png"}
                  alt="Bullet Point"
                  className="bullet-icon"
                />
                <p className="text">
                  Fundraising to fuel the construction of the
                  <span> BRAINER SOCIETY</span> metaverse.
                </p>
              </li>
            </ul>
          </StyledRoadmapCard>
        </FloatAnimation>
        {/* <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 2</h2>
          <p style={{margin: 0, marginBottom: '1em'}}><span>Building the team</span></p>
          <p className="text"><span>TEAM BUILDING</span>. This chapter is dedicated to bringing together passionate individuals who share our vision and will help build the future of <span>BRAINER SOCIETY</span>.</p>
        </StyledRoadmapCard>


        <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 3</h2>
          <p style={{margin: 0, marginBottom: '1em'}}><span>Building the Brainer Society</span></p>
          <p className="text"> 
          We aim to lunch the first version of the game on a test network, allowing players to explore their Head Houses and the metaverse.
          We’ll also kick off development of the <span>BRAINER MARKETPLACE</span>, where Brainers will exchange their NFT items. 
          <span>BRAINER SOCIETY</span>.</p>
        </StyledRoadmapCard>

        <StyledRoadmapCard>
          <h2 style={{margin:0}}>Chapter 4</h2>
          <p style={{margin: 0, marginBottom: '1em'}}><span>The Metaverse Economy Unleashed</span></p>
          <p className="text">
                Launch Brainer Society on the mainnet, along with the full rollout of the BRAINER token economy.
                This milestone enables players to earn and trade tokens through:
          <ul>
            <li className="text"> Play Mini-games</li>
            <li className="text"> Unlocking rewards and achievements</li>
            <li className="text"> Visit and interact with the community</li>
          </ul>
          </p>


        </StyledRoadmapCard> */}
      </HBox>
    </StyledRoadmapSection>
  );
}
