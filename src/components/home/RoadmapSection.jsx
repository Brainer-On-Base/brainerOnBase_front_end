import React from "react";
import GenericTitle from "../GenericTitle/GenericTitle";
import { HBox, HTitle } from "../../HocComponents";
import styled from "styled-components";
import { FloatAnimation } from "../NftDetails/NftDetails";

const StyledRoadmapCard = styled(HBox)`
  font-family: inherit;
  font-family: "Luckiest Guy", cursive;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  .text {
    margin: 0;
    font-size: 1em !important;
    font-family: monospace;
    line-height: 1.3em;
    color: white;

    span {
      font-size: 0.9em;
    }
  }

  .subtitle {
    span {
      font-size: 1.5em;
    }
  }

  ul {
    padding-left: 0;
    li {
      font-size: 1.8em;

      margin: 0;
      display: flex;
      align-items: center;
      .bullet-icon {
        width: 50px;
        height: 50px;
        margin-left: 0;
      }
    }
  }

  @media screen and (max-width: 814px) {
    font-size: 1.2em;
    padding: 10px 20px;
  }

  @media (max-width: 900px) {
    img {
      display: block;
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

const StyledRoadmapSection = styled(HBox)`
  position: relative;
  margin-bottom: 3em;

  .img1 {
    width: 250px;
    position: absolute;
    top: 500px;
    right: 20px;
    transform: translateX(-50%); /* Para centrar horizontalmente */
    filter: drop-shadow(0 0 5em #c464ffaa);
    z-index: 99999999999;
    transition: transform 0.3s ease; /* Suaviza el giro al cambiar de dirección */

    /* Animación inicial al cargar */
    animation: fly_short 2.5s infinite alternate, fadeInUp 0.2s;
  }

  @media (max-width: 1200px) {
    .img1 {
      width: 150px;
      position: absolute;
      left: 80%; /* Centra horizontalmente */
    }

    .text {
      font-size: 18px !important;
      text-align: left;
    }
  }
  @media (max-width: 750px) {
    .img1 {
      width: 100px;
      position: absolute;
      left: 75%; /* Centra horizontalmente */
    }

    p {
      font-size: 10px !important;
      text-align: left;
    }
  }
`;

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
                  Social media marketing campaign to build buzz and ignite{" "}
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
                  Inaugural collection of <span>NFTs in pixelArt</span> of
                  different brainers.
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
                  Creation and airdrop of <span>BRNR</span>. The currency of
                  Brainer Society.
                </p>
              </li>
              <li>
                <img
                  src={"./commonBrainer.png"}
                  alt="Bullet Point"
                  className="bullet-icon"
                />
                <p className="text">
                  Fundraising campaign to gather resources to build the{" "}
                  <span>BRAINER SOCIETY</span> metaverse.
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
