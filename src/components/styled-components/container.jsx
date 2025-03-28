import { Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HBox } from "../../HocComponents";

// Define the floating animation
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const StyledFlexCenterContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledFlexFullCenterContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
`;

export const StyledFlexBetweenContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledAppContainer = styled("div")`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  .minted-quantity {
    font-family: "Luckiest Guy", cursive;
    margin-left: 8px;
    font-size: 40px;
    color: #888;
    text-transform: uppercase;
  }
`;

export const StyledInitAppContainer = styled(StyledAppContainer)`
  background-color: #242424 !important;
  z-index: 9999;
  height: 100vh;
  width: 100%;
`;

export const StyledHomeContent = styled("div")`
  text-align: center;
  font-family: "Luckiest Guy", cursive;
  margin: 0 auto;
  z-index: 99;
  .logo {
    height: 6em;
    padding: 2px;
    will-change: filter;
    transition: filter 300ms;
    padding: 2px;
    will-change: filter;
    transition: filter 300ms;
    width: 350px;
    height: 350px;

    animation: rotate 8s infinite alternate;
    border: none;

    img {
      width: 400px;
      transition: filter 300ms;
      border: none;

      z-index: 9999 !important;
    }
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #c464ffaa);
  }

  .read-the-docs {
    margin-top: 4em;
    color: #888;
  }

  h1 {
    font-size: 4em;
    margin-top: -5px;
    line-height: 1.1;
    transition: filter 300ms;
  }
`;

export const StyledNavbarContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 99999999999;
  margin: 0 auto;
  background: ${({ scrolled, theme }) =>
    scrolled ? theme.shadeViolet : "transparent"};
  background: ${({ theme }) => theme.shadeViolet};
  transition: background-color 0.3s ease;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  img {
    width: 80px;
    margin: 2em 1em 2em 0;
    padding: 2px;
    will-change: filter;
    transition: filter 300ms;
    border-radius: 80%;
    /* border: 2px solid black; */
    /* background-color: #530354; */
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */

    &:hover {
      filter: drop-shadow(0 0 2em #c464ffaa);
    }
  }

  .navbaritems {
    font-size: 2em;
    line-height: 1.1;
    transition: all 300ms;
    font-family: "Luckiest Guy", cursive;
    color: #888;
    text-decoration: none;
    margin-right: 2px;

    &:hover {
      color: white;
      cursor: pointer;
    }
  }

  svg {
    font-size: 24px;
    cursor: pointer;
    margin: 10px;
    transition: all 0.2s ease;
    background-color: ${({ backgroundcolor }) =>
      backgroundcolor ? backgroundcolor : "transparent"};
    border-radius: 50%;
    &:hover {
      color: #1c93e3;
      // background: white;
    }
  }
`;

export const StyledWelcomeSection = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-size: cover;
  .home-text-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 6em;
    z-index: 9999;

    h1 {
      font-size: 6em;
      line-height: 1.1;
      transition: filter 300ms;
      font-family: "Luckiest Guy", cursive;
      text-shadow: 0 0.0377358491em 0 #000, 0.0125786164em 0.0377358491em 0 #000,
        0.0125786164em -0.0125786164em 0 #000,
        -0.0125786164em 0.0125786164em 0 #000, -0.0125786164em -0.0125786164em;

      &:nth-of-type(1) {
        margin-top: 80px;
        font-size: 150px;
        color: #ff437d;
      }
      &:nth-of-type(2) {
        margin-top: -120px;
        font-size: 80px;
        color: #888;
        color: white;
      }
      &:nth-of-type(3) {
        text-shadow: none;
        font-size: 80px;
        color: #888;
      }

      span {
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;
      }
    }

    button {
      filter: drop-shadow(0 0 5em #c464ffaa);
    }
  }
  img {
    width: 350px;
    position: absolute;
    bottom: 0;
    transition: filter 300ms;
    z-index: 9999 !important;
  }

  .moon {
    top: 120px;
    right: 50px;
    animation: rotate 8s infinite alternate;
  }

  .baloon {
    width: 280px;
    z-index: 99999;
    left: 0;
    bottom: 0;
    animation: fly 4s infinite alternate;
  }

  @media (max-width: 1300px) {
    .home-text-container {
      align-items: center;
    }
    img {
      width: 250px;
    }
  }

  @media (max-width: 1050px) {
    .moon {
      right: 40px;
      top: 200px;
      animation: rotate 8s infinite alternate;
    }

    .baloon {
      display: none;
    }
  }
  @media (max-width: 900px) {
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 80px;
          font-size: 120px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -100px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 60px;
          color: #888;
        }
      }
    }
    .moon {
      width: 150px;
      right: 40px;
      top: 460px !important;
      animation: rotate 8s infinite alternate;
    }
  }

  @media (max-width: 650px) {
    .moon {
      display: none;
    }
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 100px;
          font-size: 100px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -80px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 30px;
          color: #888;
        }
      }

      button {
        margin-top: 2em;
      }
    }
  }
`;

export const StyledWelcomeSection2 = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  .home-text-container {
    margin-top: 4em;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-bottom: 6em;
    z-index: 9999;

    .minted-quantity {
      font-family: "Luckiest Guy", cursive;
      margin-left: 8px;
      font-size: 40px;
      color: #888;
      text-transform: uppercase;
    }

    h1 {
      font-size: 2em;
      line-height: 1.1;
      transition: filter 300ms;
      font-family: "Luckiest Guy", cursive;
      text-shadow: 0 0.0377358491em 0 #f8b8b8,
        0.0125786164em 0.0377358491em 0 #f8b8b8,
        0.0125786164em -0.0125786164em 0 #f8b8b8,
        -0.0125786164em 0.0125786164em 0 #f8b8b8,
        -0.0125786164em -0.0125786164em;
      &:nth-of-type(1) {
        margin-top: 80px;
        font-size: 140px;
        color: #ff437d;
      }
      &:nth-of-type(2) {
        margin-top: -120px;
        font-size: 60px;
        color: #888;
        color: white;
        text-shadow: none;

        &::before {
          content: "";
          display: inline-block;
          width: 50px; /* Ajusta el tamaño según el logo */
          height: 50px;
          background-image: url("./baseLogo.png"); /* Cambia por la ruta de tu logo */
          background-size: contain;
          background-repeat: no-repeat;
          margin-right: 2px; /* Espacio entre el logo y el texto */
          vertical-align: middle; /* Alinea verticalmente con el texto */
        }
      }
      &:nth-of-type(3) {
        text-shadow: none;
        font-size: 60px;
        color: #888;
      }

      span {
        font-family: "Luckiest Guy", cursive;
        color: #ff437d;
      }
    }

    .welcome-actions {
      button {
        &:first-of-type {
          margin-right: 10px;
        }
        filter: drop-shadow(0 0 5em #c464ffaa);
      }
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  img {
    width: 400px;
    transition: filter 300ms;
    z-index: 9999 !important;
    animation: rotate 8s infinite alternate;
  }

  @media (max-width: 1300px) {
    .home-text-container {
      align-items: center;
    }
  }

  @media (max-width: 1050px) {
    .home-text-container {
      margin-top: 4em;
      text-align: center;
      flex-direction: column;
    }
    .moon {
      margin-top: 1em;
      animation: rotate 8s infinite alternate;
    }
  }

  @media (max-width: 900px) {
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 80px;
          font-size: 120px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -100px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 60px;
          color: #888;
        }
      }
    }
    .moon {
      width: 300px;
      animation: rotate 8s infinite alternate;
    }
  }

  @media (max-width: 650px) {
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 100px;
          font-size: 100px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -80px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 30px;
          color: #888;
        }
      }

      button {
        margin-top: 2em;
      }
    }
  }

  @media (max-width: 415px) {
    .home-text-container {
      h1 {
        &:nth-of-type(1) {
          margin-top: 60px;
          font-size: 80px;
          color: #ff437d;
        }
        &:nth-of-type(2) {
          margin-top: -60px;
          font-size: 50px;
          color: #888;
          color: white;
        }
        &:nth-of-type(3) {
          text-shadow: none;
          font-size: 30px;
          color: #888;
        }
      }
    }
  }
`;

export const StyledHomeSection = styled("div")`
  min-height: 120vh;
  display: flex;
  padding-top: 1em;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  h1 {
    margin: 0;
    font-family: "Luckiest Guy", cursive;
    z-index: 9999;
    text-shadow: 0 0.0377358491em 0 #f8b8b8,
      0.0125786164em 0.0377358491em 0 #f8b8b8,
      0.0125786164em -0.0125786164em 0 #f8b8b8,
      -0.0125786164em 0.0125786164em 0 #f8b8b8, -0.0125786164em -0.0125786164em;
    font-size: 150px;
    color: #ff437d;
    margin: 20px;
  }

  @media (max-width: 1200px) {
    justify-content: flex-between;
    align-items: center;

    h1 {
      margin-top: 50px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      margin: 50px;
      margin-bottom: 0;
    }

    .title {
      width: 100%;
      text-align: center;
      font-size: 100px;
    }
  }
  @media (max-width: 500px) {
    .title {
      margin-top: 90px !important;
      font-size: 80px;
    }
  }
`;
export const StyledAboutSection = styled(StyledHomeSection)`
  .astronaut {
    filter: drop-shadow(0 0 5em #c464ffaa);

    width: 300px;
    animation: fly_short 3.5s infinite alternate, fadeInUp 0.2s;
    // filter: drop-shadow(0 0 2em #c464ffaa);
  }

  h3 {
    top: 100px;
    color: white;
    font-family: "Luckiest Guy", cursive;
    font-size: 60px;
    position: absolute;
    z-index: 99999999;
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

  @media (max-width: 1200px) {
    img,
    #bubbletokenomics {
      display: none !important;
    }
  }
`;

export const StyledAstronautCard = styled("div")`
  position: absolute;
  width: 450px;
  height: auto;
  border: 1px solid black;
  background: #1a1a1a;
  z-index: 999;
  padding: 1em;
  border-radius: 8px;
  padding: 0.6em;
  font-size: 1.5em;
  font-weight: 500;

  h2 {
    font-family: "Luckiest Guy", cursive;
    margin-top: 0;
  }

  p {
    margin-top: 0;
    font-size: 1em !important;
    font-family: monospace;
    line-height: 1.3em;
  }

  span {
    font-size: 25px;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }

  @media (max-width: 1300px) {
    font-size: 1em;
    p {
      marin-top: 0;
      font-size: 1.5em !important;
    }
    span {
      font-size: 20px;
    }
  }
  @media (max-width: 1200px) {
    position: static;
    margin: 0 1em 1em 1em;
    width: 90%;
  }
`;

export const StyledAstronautCard1 = styled(StyledAstronautCard)`
  top: 250px;
  left: 40px;
  animation: ${float} 4s ease-in-out infinite;
`;
export const StyledAstronautCard2 = styled(StyledAstronautCard)`
  top: 320px;
  right: 40px;
  animation: ${float} 4.5s ease-in-out infinite;
`;
export const StyledAstronautCard3 = styled(StyledAstronautCard)`
  bottom: 80px;
  left: 410px;
  animation: ${float} 5s ease-in-out infinite;
`;

export const StyledFooterSection = styled(HBox)`
  //   background-color: #1a1a1a;
  /* background: url("/footerbck.png"); */
  background-size: repeat;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.19) 0px -10px 20px,
    /* Sombra principal arriba */ rgba(0, 0, 0, 0.23) 0px -6px 6px; /* Sombra secundaria arriba */
  width: 100%;
  display: flex;
  height: auto;
  padding-top: 2em;
  margin-top: 2em;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  justify-content: flex-start;
  p {
    text-align: center;
    color: white;
    font-size: 24px;
    font-weight: bold !important;
    margin: 0;
    font-size: 16px;
  }

  span {
    font-size: 20px;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }

  img {
    &:first-of-type {
      transform: scaleX(-1);
    }
    width: 40px;
    border-radius: 50%;
    margin: 1em 2em;
  }

  .spaceship {
    transform: scaleX(-1);
    position: absolute;
    bottom: 10;
    right: 0;
    width: 150px;
    animation: rotateAndMoveUp 8s infinite alternate;
  }

  .extra-info h1 {
    &:hover {
      text-decoration: underline;
    }
  }

  .social {
    display: none;
  }

  @media (max-width: 980px) {
    .spaceship,
    #bubbletokenomics {
      display: none !important;
    }
    .social {
      display: flex;
    }

    .extra-info {
      position: relative !important;
      display: flex !important;
      flex-direction: row !important;
      width: 100%;
      top: 0 !important;
      left: 0 !important;
      flex-wrap: wrap !important;
    }
  }
`;

export const StyledBubbleDialog = styled("div")`
  p {
    margin: 0;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    text-align: left;
    line-height: 1.5em;
    color: black !important;
  }
  position: absolute;
  right: ${({ position }) => position?.right};
  z-index: 999999;
  top: ${({ position }) => position?.top};
  left: ${({ position }) => position?.left};
  bottom: ${({ position }) => position?.bottom};
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 20px;
  font-size: 20px;
  background-color: #fff;
  color: black !important;

  padding: 12px;
  box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000,
    0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000,
    -4px -4px #000, 4px 4px #000;
  box-sizing: border-box;
  width: ${({ width }) => width ?? "200px"};
  min-height: ${({ height }) => height ?? "200px"};
  transition: all 1s ease;

  &:after {
    position: absolute;
    z-index: 999999;
    content: "";
    height: 4px;
    width: 4px;
    bottom: ${({ positionspik }) => positionspik?.bottom ?? "-8px"};
    left: ${({ positionspik }) => positionspik?.left ?? "90px"};
    background-color: #fff;
    box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000,
      -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff,
      -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
    transform: ${({ positionspik }) =>
      positionspik?.rotate === "true"
        ? "rotate(150deg)"
        : ""}; /* Rotar el piquito */
  }

  span {
    font-size: 20px;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }
`;

export const StyledTokenomicsSection = styled("div")`
  height: auto;
  margin-bottom: 4em;
  margin-top: 4em;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  overflow: hidden;

  h2 {
    margin: 0;
    font-size: 4em;
    width: 100%;
    font-family: "Luckiest Guy", cursive;
    font-weight: 600;
    text-align: center;
    color: white;
    margin-bottom: 1em;
  }
`;

export const StyledCard = styled("div")`
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1.8em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  transition: border-color 0.25s;
  font-family: "Luckiest Guy", cursive;
  width: 900px;
  align-self: flex-start;
  margin: 0em 0em 2em 4em;
  display: flex;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  img {
    width: 200px;
    height: 200px;
    margin: 0em 1em;
    transition: filter 300ms;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0 1em #c464ffaa);
    }
  }

  h2 {
    text-align: left !important;
    font-size: 1.4em !important;
    margin-bottom: 1em;
  }

  p,
  .text {
    font-size: 0.8em !important;
    font-family: monospace;
    font-size: 40px;
    line-height: 1.3em;
  }

  span {
    font-size: 20px;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }

  &:nth-of-type(2),
  &:nth-of-type(4),
  &:nth-of-type(6) {
    align-self: flex-end;
    margin: 0em 4em 2em 0em;
  }

  @media (max-width: 1200px) {
    align-self: center !important;
    margin: 1em !important;
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin: 1em !important;
  }
  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`;

export const StyledNFTCollectionsContainer = styled(
  StyledFlexFullCenterContainer
)`
  position: relative;
  flex-direction: column;
  background-color: transparent;
  flex-grow: 1;

  h2 {
    margin: 0;
    font-size: 4em;
    width: 50%;
    font-family: "Luckiest Guy", cursive;
    font-weight: 600;
    text-align: center;
    color: white;
  }

  .nft-content-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;

    .nft-description {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 4em 2em 4em 4em;

      p,
      li {
        font-size: 20px;
        font-weight: 100;
        font-weight: 600;
        color: #aaa;

        span {
          color: #ff437d;
          font-weight: 600;
          font-family: "Luckiest Guy", cursive;
          font-size: 20px;
        }
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin-top: 2em;

        li {
          margin-bottom: 1em;
          display: flex;
          align-items: center;

          .bullet-icon {
            width: 50px;
            height: 50px;
            margin-right: 1em;
          }
        }
      }
    }

    .nft-examples-images {
      padding: 4em;
      width: 70%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 1em;

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 8px;
        &:hover {
          cursor: pointer;
          filter: drop-shadow(0 0 1em #c464ffaa);
        }
      }
    }
  }

  @media (max-width: 1400px) {
    h2 {
      width: 100%;
      font-size: 2.5em;
    }
    .nft-content-container {
      flex-direction: column;
      align-items: center;

      .nft-description {
        width: 90%;
        text-align: left;
        padding: 0;
      }

      .nft-examples-images {
        padding: 0;
        width: 90%;
        gap: 1em 2em;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin-bottom: 2em;

        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;

        img {
          width: 100%;
          height: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .description {
      display: none;
    }
    .nft-examples-images {
      gap: 1em !important;
    }
    p,
    li {
      font-size: 15px !important;
      span {
        font-size: 15px !important;
      }
    }
  }
`;

export const StyledNFTDetailsContainer = styled(StyledHomeSection)`
  min-height: 100vh;
  width: 100%;
  align-items: center;

  h1 {
    line-height: 1.1;
    transition: filter 300ms;
    font-family: "Luckiest Guy", cursive;
    text-shadow: 0 0.0377358491em 0 #f8b8b8,
      0.0125786164em 0.0377358491em 0 #f8b8b8,
      0.0125786164em -0.0125786164em 0 #f8b8b8,
      -0.0125786164em 0.0125786164em 0 #f8b8b8, -0.0125786164em -0.0125786164em;
    &:nth-of-type(1) {
      margin-top: 40px;
      font-size: 90px;
      color: #ff437d;
    }
    &:nth-of-type(2) {
      margin-top: -20px;
      font-size: 80px;
      color: #888;
      color: white;
      text-shadow: none;
    }
  }

  h2 {
    margin: 0.2em 0;
    font-size: 2.5em;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }

  @media screen and (max-width: 814px) {
    h1 {
      &:nth-of-type(1) {
        font-size: 60px; /* Reduce el tamaño para pantallas pequeñas */
        margin-top: 20px; /* Ajusta el margen para que no ocupe demasiado espacio */
      }
      &:nth-of-type(2) {
        font-size: 50px; /* Reduce también el tamaño del segundo título */
        margin-top: 0 !important; /* Ajusta el margen superior */
      }
    }

    h2 {
      margin-top: 1em;
      font-size: 2em; /* Reduce un poco el tamaño del subtítulo */
    }
  }
`;

export const StyledTokenSection = styled(motion.div)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  font-family: "Luckiest Guy", cursive;
  z-index: 999999;
  overflow: hidden;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.4s ease;
  background: ${({ theme }) => theme.shadeViolet || "#2c003e"};
  padding: 40px;
  width: 120%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  h3 {
    transition: all 0.4s ease;
    font-size: 60px;
    margin: 0;
    color: white;

    @media (max-width: 900px) {
      font-size: 40px;
    }
  }

  &:hover {
    p {
      color: #ff0cdf !important;
      filter: drop-shadow(0 0 1em #ff0cdf);
    }
  }

  p {
    font-weight: bold;
    font-family: "Luckiest Guy", cursive;
    font-size: 40px;
    margin: 0;
    cursor: pointer;
    color: #888;
    transition: all 0.4s ease;
    text-align: center;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
      font-size: 2em;
    }

    @media (max-width: 992px) {
      font-size: 1.8em;
    }

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
`;
