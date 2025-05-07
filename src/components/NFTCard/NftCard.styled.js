import { motion } from "framer-motion";
import styled from "styled-components";

export const NFTCardContainer = styled(motion.div)`
  padding: 1.5em;
  margin: 4em auto;
  max-width: ${(props) => props.width || "400px"};
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #2a0845, #6441a5); /* Fondo degradado */
  color: #ffffff;
  overflow: hidden;
  z-index: 9999999;
  height: ${(props) => props.height || "auto"};

  margin-bottom: 8em;
  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    padding-bottom: 0;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.2); /* Fondo translúcido */
    z-index: 9999999;
  }

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 814px) {
    max-width: 80%;
    padding: 1em;
    img {
      max-width: 150px;
    }
  }
`;

export const TraitTag = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Fondo translúcido */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Bordes suaves */
  padding: 0.5em;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  transition: transform 0.3s ease, background 0.3s ease; /* Suaviza hover */

  &:hover {
    transform: translateY(-5px); /* Desplazamiento hacia arriba */
    background: rgba(255, 255, 255, 0.2); /* Color más visible */
  }

  p {
    margin: 0;
  }
`;

export const TraitContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas iguales */
  gap: 1em; /* Espaciado entre las columnas y filas */
  margin: 1em 0;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  z-index: 9999999;
  align-items: stretch;
`;
