import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledBOBTitle = styled.div`
  z-index: 999;
  &:hover {
    h1 {
      color: white !important;
    }
  }
  h1 {
    line-height: 1.1;
    transition: filter 300ms;
    font-family: "Luckiest Guy", cursive;
    cursor: pointer;

    &:nth-of-type(1) {
      font-size: 40px;
      color: white;
    }
    &:nth-of-type(2) {
      margin-top: -30px;
      font-size: 25px;
      text-align: center;
      color: white;

      text-shadow: none;

      &::before {
        content: "";
        display: inline-block;
        width: 25px; /* Ajusta el tamaño según el logo */
        height: 25px;
        background-image: url("./baseLogo.png"); /* Cambia por la ruta de tu logo */
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 2px; /* Espacio entre el logo y el texto */
        vertical-align: middle; /* Alinea verticalmente con el texto */
      }
    }
  }
`;

const BrainerOnBaseTitle = ({ title }) => {
  const navigate = useNavigate();
  return (
    <StyledBOBTitle onClick={() => navigate("/home#home")}>
      <h1 className={"animate__animated animate__backInDown"}>BRAINER</h1>
      <h1 className={"animate__animated animate__fadeInDown animate__delay-1s"}>
        N BASE
      </h1>
    </StyledBOBTitle>
  );
};

export default BrainerOnBaseTitle;
