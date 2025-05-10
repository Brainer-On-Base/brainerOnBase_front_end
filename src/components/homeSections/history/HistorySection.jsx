import React, { useState, useEffect } from "react";
import BubbleDialog from "../../BubbleDialog/BubbleDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { StyledButton } from "../../styled-components/buttons";
import GenericTitle from "../../GenericTitle/GenericTitle";
import { StyledHistorySection } from "./historySection.styled";
import { HBox } from "../../../HocComponents";

const BRAINER_HISTORY_ARRAY = [
  `In the beginning, the world was simple, connected by ideas and dreams.
  We, the "Brainers," are everywhere—connected by a common force: knowledge, curiosity, and the vision of a better reality. 
  Living under a system that kept us limited, where only a select few held the reins of power, our potential was underestimated. 
  And so, the Brainers watched, learned, and waited for the right moment.`,
  `Then, the call went out: it was time to break free from the constraints of centralized control. The Brainer Society was born. Fueled by unity and the power of blockchain, the Brainers united to create a society where everyone has a voice, where actions are transparent, and where creativity knows no limits. Our token BRNR became more than a currency, it’s our symbol of freedom, community, and power.
  `,

  `Our Society thrives in the Metaverse, where each Brainer is the architect of their own destiny. Our homes, the “Head Houses,” reflect our unique selves, places where we create, innovate, and connect. Here, we build, trade, and grow, with each interaction echoing the core value of our society: freedom. We’ve built a Marketplace where the imagination of each Brainer turns into tradeable assets, strengthening our shared economy and celebrating individuality.
  `,
  `Play-to-Burn became our empowerment tool. Every game, every mission, every Head House upgrade brings us closer to our goal. Our economy thrives not only on earning BRNR tokens but on empowering each Brainer to take charge, customize their world, and trade on their own terms. Tokens earned in games, through achievements, or from trading rare NFTs are a testament to each Brainer’s journey.
  `,
  `Together, we are unstoppable. As we continue our journey, our collective mission is clear: we’re taking this Society beyond limits and to the moon.`,
];

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
        $active={true}
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
