import styled from "styled-components";
import { motion } from "framer-motion";
import { TbArrowBigRightFilled, TbX } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";

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
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.587);
  padding: 2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 999 !important;
  width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .closeButton {
    position: absolute;
    top: 40px;
    right: 0px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 814px) {
    .closeButton {
      top: 60px;
      right: 0px;
      z-index: 9999999;
    }
  }
`;
