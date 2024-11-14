import React, { useState } from "react";
import { StyledFlexFullCenterContainer, StyledHistorySection } from "../styled-components/container";
import BubbleDialog from "../BubbleDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../styled-components/buttons";
import { BRAINER_HISTORY_ARRAY } from "../../CONSTANTS";

export default function HistorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeDirection, setFadeDirection] = useState("animate__fadeInLeft");

  const handleNext = () => {
    if (currentIndex < BRAINER_HISTORY_ARRAY.length - 1) {
      setFadeDirection("animate__fadeInLeft");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setFadeDirection("animate__fadeInRight");
      setCurrentIndex(currentIndex - 1);
    }
  };
return <StyledHistorySection id="history">

    <StyledFlexFullCenterContainer style={{height: 'auto', flexDirection:'column', overflow: 'hidden'}}>
        <h1  className={`animate__animated animate__fadeInDown animations title`}  >HISTORY</h1>
        <p className='animate__animated animate__fadeInDown animate__delay-1s subtitle'>The Rise of the Brainers: Journey to the Moon</p>
        {/* <h3  className={`animate__animated animate__fadeInDown animations`} >BRAINER</h3> */}
        <img src="./history.png" className={`animate__animated astronaut animations`} />
        
        <BubbleDialog
        style={{transform: 'rotateX(360deg)', overflow: 'hidden'
        }}
        id="bubbletokenomics"
        active={true}
        positionDialogSpik={{
          left: '-8px',
          bottom: '98%',
          rotate: 'true'
        }}
        positionStyle={{
          left: '200px',
          top: '40%'
        }}
        width="400px"
        height="250px"
        className='animate__animated animate__fadeIn firstText'
      >
          <p className={`animate__animated animate_fadeIn`}>{BRAINER_HISTORY_ARRAY[currentIndex]}</p>
          <StyledFlexFullCenterContainer width={"100%"} height={"auto"} style={{ justifyContent: "flex-end",
            bottom: "50px",          
            left: "0px",           
          }}>
            <StyledButton size={"15px"} padding={"5px"} margin={"10px"} onClick={handlePrev} disabled={currentIndex === 0}>
              <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" />
            </StyledButton>
            <p>{currentIndex + 1}/{BRAINER_HISTORY_ARRAY.length}</p>
            <StyledButton size={"15px"} padding={"5px"} margin={"10px"} onClick={handleNext} disabled={currentIndex === BRAINER_HISTORY_ARRAY.length - 1}>
              <FontAwesomeIcon icon={faArrowCircleRight} size="1x" />
            </StyledButton>
          </StyledFlexFullCenterContainer>
      </BubbleDialog>
    </StyledFlexFullCenterContainer>
    </StyledHistorySection>;
}

