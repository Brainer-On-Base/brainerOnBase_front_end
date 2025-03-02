import styled from "styled-components";

// Contenedor principal del componente
export const RadioContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: ${({ gap }) => gap || "10px"};
`;

// Contenedor para cada opción (Radio o Checkbox)
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: ${({ labelDirection }) => labelDirection ?? "row"};
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  cursor: pointer;
  appearance: none;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.purpleMedium || "#6c63ff"};
  border-radius: ${({ type }) => (type === "checkbox" ? "4px" : "50%")};
  background-color: ${({ theme }) => theme.backgroundLight || "#fff"};
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;

  &:checked[type="checkbox"] {
    background-color: ${({ theme }) => theme.purpleMedium || "#6c63ff"};
    border-color: ${({ theme }) => theme.purpleDark || "#4c3faa"};

    &::after {
      content: "✔";
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
  }

  &:checked[type="radio"] {
    background-color: white;
    border-color: ${({ theme }) => theme.purpleDark || "#4c3faa"};
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.purpleDark || "#4c3faa"};
    }
  }
`;

// Label de las opciones
export const RadioLabel = styled.label`
  font-size: ${({ labelSize }) => labelSize || "var(--h5)"};
  color: ${({ labelColor, theme }) =>
    labelColor || theme?.purpleMedium || "black"};
`;
