import styled from "styled-components";

export const StyledBOBTitle = styled.div`
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
      font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "40px")};
      color: white;
    }
    &:nth-of-type(2) {
      margin-top: ${({ fontSize }) =>
        fontSize ? `-${fontSize - 20}px` : "-30px"};
      font-size: ${({ fontSize }) => (fontSize ? `${fontSize / 2}px` : "25px")};
      text-align: center;
      color: white;

      text-shadow: none;

      &::before {
        content: "";
        display: inline-block;
        width: ${({ fontSize }) => (fontSize ? `${fontSize / 2}px` : "25px")};
        height: ${({ fontSize }) => (fontSize ? `${fontSize / 2}px` : "25px")};
        background-image: url("./baseLogo.png"); /* Cambia por la ruta de tu logo */
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 2px; /* Espacio entre el logo y el texto */
        vertical-align: middle; /* Alinea verticalmente con el texto */
      }
    }
  }
`;
