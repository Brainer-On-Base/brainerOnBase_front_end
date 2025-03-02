import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction || "column"}; /* Dirección (row o column) */
  gap: ${({ gap }) => gap || "10px"}; /* Espaciado entre label y select */
  width: ${({ width }) => width || "auto"}; /* Ancho del contenedor */
`;

export const DropdownSelect = styled.select`
  font-size: var(--p16);
  color: white;
  padding: ${({ selectPadding }) =>
    selectPadding || "10px 20px"}; /* Padding interno del select */
  border-radius: 8px;
  width: ${({ width }) => width || "200px"}; /* Ancho del dropdown */
  height: ${({ height }) => height || "40px"}; /* Altura del dropdown */
  background: ${({ theme }) => theme.shadePurpleDark};
  text-indent: 1px;
  text-overflow: "";
  border: none;
  box-shadow: 0px 4px 4px 0px #00000040;

  &:focus {
    outline: none;
  }
`;

export const DropdownOption = styled.option`
  color: white;
  background: ${({ theme }) => theme.purpleMedium};
`;

export const DropdownLabel = styled.label`
  font-size: ${({ labelSize }) =>
    labelSize || "var(--p16)"}; /* Tamaño de fuente del label */
  color: ${({ labelColor, theme }) =>
    theme?.[labelColor] || labelColor || theme.purpleMedium};
  font-weight: ${({ labelWeight }) => labelWeight || "var(--weight-regular)"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
