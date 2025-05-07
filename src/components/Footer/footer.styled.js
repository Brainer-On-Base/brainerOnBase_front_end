import styled from "styled-components";
import { HBox } from "../../HocComponents";

export const StyledFooterSection = styled(HBox)`
  //   background-color: #1a1a1a;
  /* background: url("/footerbck.png"); */
  background-size: repeat;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.19) 0px -10px 20px,
    /* Sombra principal arriba */ rgba(0, 0, 0, 0.23) 0px -6px 6px; /* Sombra secundaria arriba */
  width: 100%;
  height: auto;
  padding-top: 2em;
  margin-top: 2em;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  justify-content: flex-start;
  margin-top: 5em;

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
