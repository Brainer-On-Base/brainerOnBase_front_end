import styled from "styled-components";
import { StyledHomeSection } from "../../styled-components/container";
import { keyframes } from "@mui/system";

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
