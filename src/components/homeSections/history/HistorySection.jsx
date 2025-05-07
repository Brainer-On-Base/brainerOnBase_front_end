import React, { useState, useEffect } from "react";
import BubbleDialog from "../../BubbleDialog/BubbleDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../../styled-components/buttons";
import { BRAINER_HISTORY_ARRAY } from "../../../CONSTANTS";
import GenericTitle from "../../GenericTitle/GenericTitle";
import { StyledHistorySection } from "./historySection.styled";
import { HBox } from "../../../HocComponents";

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
