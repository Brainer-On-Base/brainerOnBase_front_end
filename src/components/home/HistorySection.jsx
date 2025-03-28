import React, { useState, useEffect } from "react";
import BubbleDialog from "../BubbleDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../styled-components/buttons";
import { BRAINER_HISTORY_ARRAY } from "../../CONSTANTS";
import GenericTitle from "../GenericTitle/GenericTitle";
import { HBox } from "../../HocComponents";
import styled from "styled-components";

const StyledHistorySection = styled(HBox)`
  min-height: 100vh;
  height: 100%;
  align-items: flex-start;
  .astronaut {
    filter: drop-shadow(0 0 5em #c464ffaa);
    position: absolute;
    left: 50px;
    top: 40%;
    width: 300px;
    animation: fly_short 3.5s infinite alternate, fadeInUp 0.2s;
  }

  p {
    font-size: 25px;
    font-weight: 100;
    font-weight: 600;
  }

  .firstText {
    margin-left: 10em;
    margin-top: 4em;
    width: 1000px;
    font-weight: 100;
  }

  @media (max-width: 1400px) {
    #bubbletokenomics {
      left: 180px;
      width: 60%;
      p {
        font-size: 20px !important;
      }
    }
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    .astronaut {
      position: relative;
      left: 0;
    }
    #bubbletokenomics {
      position: relative;
      left: 0;
      margin: 0;
      margin: 2em 0;
      width: 80%;
      height: auto !important;
    }
  }

  @media (max-width: 900px) {
    .subtitle {
      font-size: 20px;
      margin-top: 0;
      text-align: center;
    }
  }
`;

export default function HistorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeDirection, setFadeDirection] = useState("animate__fadeInRight");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeDirection("");
    }, 500); // Duración de la animación en milisegundos
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < BRAINER_HISTORY_ARRAY.length - 1) {
      setFadeDirection("animate__fadeInRight");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setFadeDirection("animate__fadeInLeft");
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <StyledHistorySection id="history" width="100%" height="100%">
      <GenericTitle
        title="HISTORY"
        subtitle="The Rise of the Brainers: Journey to the Moon"
        subtitleFontSize="30px"
      />
      <img
        src="./history.png"
        className={`animate__animated astronaut animations`}
      />

      <BubbleDialog
        style={{ transform: "rotateX(360deg)" }}
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: "-8px",
          bottom: "98%",
          rotate: "true",
        }}
        positionStyle={{
          left: "200px",
          top: "40%",
        }}
        width="400px"
        height="250px"
        className="animate__animated animate__fadeIn firstText"
      >
        <p
          className={`animate__animated ${fadeDirection}`}
          style={{ minHeight: "230px" }}
        >
          {BRAINER_HISTORY_ARRAY[currentIndex]}
        </p>
        <HBox
          width={"100%"}
          height={"auto"}
          style={{ justifyContent: "flex-end", left: "0px" }}
        >
          <StyledButton
            size={"15px"}
            padding={"5px"}
            margin={"10px"}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" />
          </StyledButton>
          <p>
            {currentIndex + 1}/{BRAINER_HISTORY_ARRAY.length}
          </p>
          <StyledButton
            size={"15px"}
            padding={"5px"}
            margin={"10px"}
            onClick={handleNext}
            disabled={currentIndex === BRAINER_HISTORY_ARRAY.length - 1}
          >
            <FontAwesomeIcon icon={faArrowCircleRight} size="1x" />
          </StyledButton>
        </HBox>
      </BubbleDialog>
    </StyledHistorySection>
  );
}
