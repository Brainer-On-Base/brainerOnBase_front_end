import styled from "styled-components";
import { HBox } from "../../../HocComponents";
export const StyledRoadmapCard = styled(HBox)`
  font-family: inherit;
  font-family: "Luckiest Guy", cursive;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  .text {
    margin: 0;
    font-size: 1em !important;
    font-family: monospace;
    line-height: 1.3em;
    color: white;

    span {
      font-family: "Luckiest Guy", cursive;
      color: ${(props) => props.theme.neonViolet};
    }
  }

  .subtitle {
    span {
      font-size: 1.5em;
    }
  }

  ul {
    padding-left: 0;
    li {
      font-size: 1.8em;

      margin: 0;
      display: flex;
      align-items: center;
      .bullet-icon {
        width: 50px;
        height: 50px;
        margin-left: 0;
      }
    }
  }

  @media screen and (max-width: 814px) {
    font-size: 1.2em;
    padding: 10px 20px;
  }

  @media (max-width: 900px) {
    img {
      display: block;
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

export const StyledRoadmapSection = styled(HBox)`
  position: relative;
  margin-bottom: 3em;

  .img1 {
    width: 250px;
    position: absolute;
    top: 500px;
    right: 20px;
    transform: translateX(-50%); /* Para centrar horizontalmente */
    filter: drop-shadow(0 0 5em #c464ffaa);
    z-index: 99999999999;
    transition: transform 0.3s ease; /* Suaviza el giro al cambiar de dirección */

    /* Animación inicial al cargar */
    animation: fly_short 2.5s infinite alternate, fadeInUp 0.2s;
  }

  @media (max-width: 1200px) {
    .img1 {
      width: 150px;
      position: absolute;
      left: 80%; /* Centra horizontalmente */
    }

    .text {
      font-size: 18px !important;
      text-align: left;
    }
  }
  @media (max-width: 750px) {
    .img1 {
      width: 100px;
      position: absolute;
      left: 75%; /* Centra horizontalmente */
    }

    p {
      font-size: 10px !important;
      text-align: left;
    }
  }
`;
