import styled from "styled-components";

export const Button = styled.button`
  transition: all 1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background, theme }) =>
    theme?.[background] || background || theme.buttonBackground};
  color: ${({ color, theme }) => theme?.[color] || color || theme.buttonColor};
  font-size: ${({ fontSize }) => fontSize || "var(--h4)"};
  font-weight: ${({ fontWeight }) => fontWeight || "var(--weight-bold)"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  outline: none;
  transition: all 0.3s ease;
  padding: ${({ padding }) => padding ?? "10px"};
  text-transform: uppercase;
  margin: ${({ margin }) => margin || "0"};
  cursor: pointer;
  border: ${({ border }) => border ?? "1px solid transparent"};
  font-family: "Luckiest Guy", cursive;

  &:hover {
    transition: all 0.3s ease;
    border: ${({ border, theme }) =>
      border || "1px solid" + theme.buttonBorderHover} !important;
  }
`;
