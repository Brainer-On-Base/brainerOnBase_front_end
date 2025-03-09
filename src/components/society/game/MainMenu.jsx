import React from "react";
import { StyledHomeSection } from "../../styled-components/container";
import { styled } from "@mui/system";
import { StyledButton } from "../../styled-components/buttons";

const MainMenu = ({ setGameNavigation, setIsGameStarted }) => {
  return (
    <StyledGameMain>
      <h1 className={"animate__animated animate__backInDown"}>BRAINER</h1>
      <h1 className={"animate__animated animate__fadeInDown animate__delay-1s"}>
        N BASE
      </h1>

      <StyledButton
        className={"animate__animated animate__fadeInDown animate__delay-2s"}
        style={{ zIndex: 2, padding: "1em", width: "280px" }}
        size={"1.8em"}
        onClick={() => {
          setIsGameStarted(true), setGameNavigation("society");
        }}
      >
        JOIN SOCIETY
      </StyledButton>
      <StyledButton
        className={"animate__animated animate__fadeInDown animate__delay-3s"}
        style={{ zIndex: 2, padding: "1em", width: "280px", margin: "1em" }}
        size={"1.8em"}
        onClick={() => setGameNavigation("map")}
      >
        SOCIETY MAP
      </StyledButton>
      <StyledButton
        className={"animate__animated animate__fadeInDown animate__delay-4s"}
        style={{ zIndex: 2, padding: "1em", width: "280px" }}
        size={"1.8em"}
        onClick={() => setGameNavigation("settings")}
      >
        SETTINGS
      </StyledButton>
    </StyledGameMain>
  );
};

export default MainMenu;

export const StyledGameMain = styled(StyledHomeSection)`
  // .astronaut{
  //     filter: drop-shadow(0 0 5em #c464ffaa);

  //     width: 300px;
  //     animation: fly_short 3.5s infinite alternate, fadeInUp 0.2s;
  //     // filter: drop-shadow(0 0 2em #c464ffaa);
  // }
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  h1 {
    transition: filter 300ms;
    font-family: "Luckiest Guy", cursive;
    text-shadow: 0 0.0377358491em 0 #f8b8b8,
      0.0125786164em 0.0377358491em 0 #f8b8b8,
      0.0125786164em -0.0125786164em 0 #f8b8b8,
      -0.0125786164em 0.0125786164em 0 #f8b8b8, -0.0125786164em -0.0125786164em;
    &:nth-of-type(1) {
      margin-top: 80px;
      font-size: 140px;
      color: #ff437d;
    }
    &:nth-of-type(2) {
      margin-top: -80px;
      font-size: 90px;
      color: #888;
      color: white;
      text-shadow: none;

      &::before {
        content: "";
        display: inline-block;
        width: 80px; /* Ajusta el tamaño según el logo */
        height: 80px;
        background-image: url("./baseLogo.png"); /* Cambia por la ruta de tu logo */
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 2px; /* Espacio entre el logo y el texto */
        vertical-align: middle; /* Alinea verticalmente con el texto */
      }
    }
  }
  .img1 {
    width: 250px;
    position: absolute;
    right: 50px;
    bottom: -250px;
    transition: filter 300ms;
    z-index: 9999;
    animation: fly_short 2s infinite alternate;
  }

  @media (max-width: 650px) {
  }
`;
