import React from "react";
import {
  StyledFlexCenterContainer,
  StyledFlexFullCenterContainer,
  StyledFooterSection,
} from "./styled-components/container";
import { StyledButton } from "./styled-components/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import BubbleDialog from "./BubbleDialog";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const handleNavigateLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <StyledFooterSection>
      <strong>Disclaimer: Not Financial Advice</strong>
      <p>
        <span>BRAINER</span> is a community-driven project created purely for
        entertainment purposes.
      </p>

      <p>
        We're <span>BUILDING</span> for the fun of it, and for all of us.
      </p>
      <StyledFlexCenterContainer style={{ justifyContent: "center" }}>
        <img src="/brainerCoin.png" alt="Brainer Coin Logo" />
        <p id="copyright" style={{ margin: "10px" }}>
          Copyright © 2024. All rights reserved. - braineronbase@gmail.com
        </p>
        <img src="/brainerCoin.png" alt="Brainer Coin Logo" />
      </StyledFlexCenterContainer>

      <BubbleDialog
        style={{ transform: "rotateX(360deg)", overflow: "hidden" }}
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: "120px",
          bottom: "-4px",
          rotate: "25deg",
        }}
        positionStyle={{
          right: "120px",
          top: "0%",
        }}
        width="135px"
        height="50px"
        className="animate__animated animate__fadeIn firstText"
      >
        <StyledButton
          size={"15px"}
          padding={"5px"}
          margin={"0  5px 10px 5px"}
          onClick={() => handleNavigateLink("https://x.com/BrainerOnBase_")}
        >
          <FontAwesomeIcon icon={faX} size="1x" />
        </StyledButton>
        <StyledButton
          size={"15px"}
          padding={"5px"}
          margin={"0 5px 10px 5px"}
          onClick={() => handleNavigateLink("https://t.me/+cJSxITBwX_FhNmVk")}
        >
          <FontAwesomeIcon icon={faTelegram} size="1x" />
        </StyledButton>
        <StyledButton
          size={"15px"}
          padding={"5px"}
          margin={"0  5px 10px 5px"}
          onClick={() => handleNavigateLink("https://discord.gg/braineronbase")}
        >
          <FontAwesomeIcon icon={faDiscord} size="1x" />
        </StyledButton>
      </BubbleDialog>
      <img
        className="spaceship"
        src="/brainerCoin5.png"
        alt="Brainer Coin Logo"
        style={{ transform: "scaleX(-1) ", overflow: "hidden" }}
      />

      <StyledFlexFullCenterContainer
        width="100%"
        style={{ marginTop: "1em" }}
        className="social"
      >
        <StyledButton size={"15px"} padding={"5px"} margin={"0  5px 10px 5px"}>
          <FontAwesomeIcon icon={faX} size="1x" />
        </StyledButton>
        <StyledButton size={"15px"} padding={"5px"} margin={"0 5px 10px 5px"}>
          <FontAwesomeIcon icon={faTelegram} size="1x" />
        </StyledButton>
        <StyledButton size={"15px"} padding={"5px"} margin={"0  5px 10px 5px"}>
          <FontAwesomeIcon icon={faDiscord} size="1x" />
        </StyledButton>
      </StyledFlexFullCenterContainer>
    </StyledFooterSection>
  );
}
