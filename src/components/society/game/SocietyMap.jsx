import React from "react";
import { StyledGameMain } from "./MainMenu";
import { StyledButton } from "../../styled-components/buttons";
import { StyledBlackContainer } from "./StyledGame";

const SocietyMap = ({ setGameNavigation, setIsGameStarted }) => {
  return (
    <StyledGameMain>
      <h1 className={"animate__animated animate__backInDown"}>SOCIETY MAP</h1>

      <StyledBlackContainer>
        <StyledButton
          className={"animate__animated animate__fadeInDown animate__delay-2s"}
          style={{ zIndex: 4, padding: "1em", width: "280px" }}
          size={"1.8em"}
          onClick={() => {
            setGameNavigation("society");
          }}
        >
          GO BACK
        </StyledButton>
      </StyledBlackContainer>
    </StyledGameMain>
  );
};

export default SocietyMap;
