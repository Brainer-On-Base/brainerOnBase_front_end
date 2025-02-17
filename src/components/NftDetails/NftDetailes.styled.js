import styled from "styled-components";
import { motion } from "framer-motion";
import { TbArrowBigRightFilled, TbX } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";

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

export const NFTCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  max-width: 850px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #2a0845, #6441a5); /* Fondo degradado */
  color: #ffffff;
  overflow: hidden;
  z-index: 9999999;
  height: 700px;

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

    h2 {
      margin: 0 0 0.5em;
      font-size: 2em;
      font-weight: bold;
      color: #ffe600; /* Color destacado para el título */
      text-align: center;
    }
  }

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 814px) {
    max-width: 100%;
    padding: 1em;
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
export const ArrowLeft = styled(TbArrowBigLeftFilled)`
  z-index: 999999;
  margin: 0 1em;
  font-size: 5em;
  color: #ffffff; /* Color base */
  transition: transform 0.3s ease, color 0.3s ease; /* Suaviza animaciones */

  &:hover {
    cursor: pointer;
    transform: scale(1.2); /* Hace la flecha más grande al hover */
    color: #ff437d; /* Color vibrante para combinar con las cartas */
  }

  &:active {
    transform: scale(1.1); /* Pequeña compresión al hacer clic */
    color: #ffe600; /* Un toque de amarillo brillante al clic */
  }
`;

export const ArrowRight = styled(TbArrowBigRightFilled)`
  z-index: 999999;
  margin: 0 1em;
  font-size: 5em;
  color: #ffffff; /* Color base */
  transition: transform 0.3s ease, color 0.3s ease; /* Suaviza animaciones */

  &:hover {
    cursor: pointer;
    transform: scale(1.2); /* Hace la flecha más grande al hover */
    color: #ff437d; /* Color vibrante para combinar con las cartas */
  }

  &:active {
    transform: scale(1.1); /* Pequeña compresión al hacer clic */
    color: #ffe600; /* Un toque de amarillo brillante al clic */
  }
`;

export const CloseIcon = styled(TbX)`
  background: ${({ theme }) => theme.deepViolet};
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 2em;
  color: #ffffff;
  transition: transform 0.3s ease, color 0.3s ease;
  z-index: 999999;
  cursor: pointer;
`;

export const NFTDetailsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.587);
  padding: 2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 999999999999;
  width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
