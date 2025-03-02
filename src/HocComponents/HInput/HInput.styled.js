import styled from "styled-components";

export const HInputContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction || "column"}; /* Dirección (row o column) */
  gap: ${({ gap }) => gap}; /* Espaciado entre label y select */
  width: ${({ width }) => width ?? "auto"};
  align-items: center;
  justify-content: space-between;
`;

export const InputLabel = styled.label`
  font-size: ${({ labelSize }) =>
    labelSize || "var(--p16)"}; /* Tamaño de fuente del label */
  color: ${({ labelColor, theme }) =>
    labelColor || theme.purpleMedium}; /* Color del label */
  font-weight: ${({ labelWeight }) => labelWeight || "var(--weight-medium)"};
  display: flex;
  align-items: center;
  justify-content: ${({ labelPosition }) => labelPosition || "center"};
  width: ${({ labelWidth }) => labelWidth || "auto"};
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${(props) =>
    props.fontSize || "var(--p16)"}; /* Tamaño de fuente desde variables */
  font-weight: ${(props) =>
    props.fontWeight ||
    "var(--weight-book)"}; /* Peso de fuente desde variables */
  color: ${(props) =>
    props.fontColor ||
    props.theme.purpleDark}; /* Color del texto desde el theme */
  background: white;
  border: 2px solid ${({ theme }) => theme.purpleMedium};
  padding: 0.2em 1em;
  border-radius: ${(props) => props.borderRadius || "20px"};
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  box-shadow: rgba(112, 37, 190, 0.11) 0px -6px 26px inset,
    rgba(112, 37, 190, 0.27) 4px 4px 26px inset;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.purpleDark};
  border-radius: ${(props) => props.borderRadius || "20px"};
  flex-direction: ${(props) => props.direction || "row"};
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};

  img {
    margin: 0 ${(props) => props.gap || "5px"};
  }

  @media screen and (max-width: 814px) {
    width: calc(${(props) => props.width || "367px"} - 20%);
    margin-top: 20px;
  }
`;
