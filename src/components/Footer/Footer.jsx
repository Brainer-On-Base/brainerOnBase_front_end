import React from "react";
import {
  StyledFlexCenterContainer,
  StyledFlexFullCenterContainer,
} from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import BubbleDialog from "../BubbleDialog/BubbleDialog";
import { FaXTwitter } from "react-icons/fa6";
import { HBox, HTitle } from "../../HocComponents";
import { StyledFooterSection } from "./footer.styled.js";

export default function Footer() {
  const handleNavigateLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <StyledFooterSection background={"shadeViolet"}>
      <HBox
        width="100%"
        className="extra-info"
        direction="column"
        align="flex-start"
        style={{
          position: "absolute",
          left: 20,
          top: 20,
        }}
      >
        <HTitle
          fontSize={"20px"}
          useTitleCase={false}
          style={{ cursor: "pointer" }}
          onClick={() => handleNavigateLink("https://docs.braineronbase.com")}
        >
          The Team
        </HTitle>
        <HTitle
          fontSize={"20px"}
          useTitleCase={false}
          style={{ cursor: "pointer" }}
          onClick={() =>
            handleNavigateLink(
              "https://docs.braineronbase.com/brainer-on-base/brainer-fi"
            )
          }
        >
          Brainer Token
        </HTitle>
        <HTitle
          fontSize={"20px"}
          useTitleCase={false}
          style={{ cursor: "pointer" }}
          onClick={() =>
            handleNavigateLink(
              "https://docs.braineronbase.com/brainer-on-base/brainer-fi"
            )
          }
        >
          Tokenomics
        </HTitle>
        <HTitle
          fontSize={"20px"}
          useTitleCase={false}
          style={{ cursor: "pointer" }}
          onClick={() =>
            handleNavigateLink(
              "https://docs.braineronbase.com/brainer-on-base/brainer-pixel-art-collection"
            )
          }
        >
          Pixel Brainer Collection
        </HTitle>
      </HBox>

      <strong>Disclaimer: Not Financial Advice</strong>
      <p>
        <span>BRAINER</span> is a community-driven project created purely for
        entertainment purposes.
      </p>

      <p>
        We're <span>BUILDING</span> for the fun of it, and for all of us.
      </p>
      <StyledFlexCenterContainer
        style={{ width: "100%", justifyContent: "center" }}
      >
        <img src="/brainerCoin.png" alt="Brainer Coin Logo" />
        <p id="copyright" style={{ margin: "10px", color: " white" }}>
          Copyright © 2024. All rights reserved. -
          braineronbaseofficial@gmail.com
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
          right: "100px",
          top: "-25%",
        }}
        width="180px"
        height="50px"
        className="animate__animated animate__fadeIn firstText"
      >
        <p>
          No Telegram, no discord, only {""}
          <StyledButton
            size={"15px"}
            padding={"5px"}
            margin={"0  5px 10px 5px"}
            onClick={() => handleNavigateLink("https://x.com/BrainerOnBase_")}
          >
            <FaXTwitter />
          </StyledButton>
        </p>

        {/* <StyledButton
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
          onClick={() => handleNavigateLink("https://discord.gg/Px9Puqhzxw")}
        >
          <FontAwesomeIcon icon={faDiscord} size="1x" />
        </StyledButton> */}
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
          <FaXTwitter />
        </StyledButton>
        {/* <StyledButton size={"15px"} padding={"5px"} margin={"0 5px 10px 5px"}>
          <FontAwesomeIcon icon={faTelegram} size="1x" />
        </StyledButton>
        <StyledButton size={"15px"} padding={"5px"} margin={"0  5px 10px 5px"}>
          <FontAwesomeIcon icon={faDiscord} size="1x" />
        </StyledButton> */}
      </StyledFlexFullCenterContainer>
    </StyledFooterSection>
  );
}
