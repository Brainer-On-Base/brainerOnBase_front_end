import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background, theme }) =>
    theme?.[background] || background || theme.shadePurpleDark};
  color: ${({ color, theme }) => theme?.[color] || color || theme.goldColor};
  font-size: ${({ fontSize }) => fontSize || "var(--h4)"};
  font-weight: ${({ fontWeight }) => fontWeight || "var(--weight-bold)"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ borderRadius }) => borderRadius || "8px"};
  border: none;
  outline: none;
  transition: all 0.3s ease;
  padding: ${({ padding }) => padding ?? "10px"};
  text-transform: uppercase;
  margin: ${({ margin }) => margin || "0"};
`;
