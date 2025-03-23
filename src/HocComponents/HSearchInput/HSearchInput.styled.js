import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction || "column"}; /* Dirección (row o column) */
  gap: ${({ gap }) => gap}; /* Espaciado entre label y select */
  z-index: 99999;
`;

export const SearchLabel = styled.label`
  font-size: ${({ labelSize }) =>
    labelSize || "var(--p16)"}; /* Tamaño de fuente del label */
  color: ${({ labelColor, theme }) =>
    labelColor || theme.purpleMedium}; /* Color del label */
  font-weight: ${({ labelWeight }) => labelWeight || "var(--weight-medium)"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || "367px"}; /* Ancho predeterminado */
  height: ${(props) => props.height || "40px"}; /* Altura predeterminada */
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.buttonBackground}; /* Fondo del input */
  border: 1px solid ${(props) => props.borderColor || props.theme.neonViolet};
  border-radius: ${(props) => props.borderRadius || "20px"};
  box-shadow: rgba(112, 37, 190, 0.11) 0px -6px 26px inset,
    rgba(112, 37, 190, 0.27) 4px 4px 26px inset;
  padding: 0 ${(props) => props.gap || "10px"};

  img {
    margin-right: ${(props) => props.gap || "10px"};
  }

  @media screen and (max-width: 814px) {
    width: calc(${(props) => props.width || "367px"} - 20%);
    margin-top: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  font-size: ${(props) =>
    props.fontSize || "var(--p16)"}; /* Tamaño de fuente desde variables */
  font-weight: ${(props) =>
    props.fontWeight ||
    "var(--weight-book)"}; /* Peso de fuente desde variables */
  color: ${(props) =>
    props.fontColor ||
    props.theme.purpleLight2}; /* Color del texto desde el theme */
  background: transparent;
  border: none;
  border-radius: ${(props) => props.borderRadius || "20px"};
  font-family: "Poppins", sans-serif;
  line-height: 1.5;

  input[type="range"]::-webkit-outer-spin-button,
  input[type="range"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
