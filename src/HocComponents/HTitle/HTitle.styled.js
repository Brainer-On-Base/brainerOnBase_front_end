import styled from "styled-components";

export const HTitleText = styled.h1`
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  font-size: ${({ fontSize, as }) =>
    as ? `var(--${as})` : fontSize ? fontSize : "32px"}; /* Tamaño de fuente */
  font-weight: ${({ fontWeight }) => fontWeight || "bold"}; /* Peso de fuente */
  color: ${({ color, theme }) =>
    theme?.[color] || color || "white" || "#000"}; /* Color del texto */
  text-align: ${({ textalign }) =>
    textalign || "left"}; /* Alineación del texto */
  margin: ${({ margin }) => margin || "0"}; /* Margen */
  padding: ${({ padding }) => padding || "0"}; /* Padding */
  line-height: ${({ lineHeight }) => lineHeight || "1.5"}; /* Altura de línea */
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing || "normal"}; /* Espaciado entre letras */
  text-transform: ${({ textTransform }) =>
    textTransform || "none"}; /* Transformación del texto */
  background: ${({ theme, background }) =>
    theme?.[background] || background || "transparent"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  font-family: ${({ useTitleCase }) =>
    useTitleCase ? "Luckiest Guy, cursive" : "monospace"};
  display: ${({ display }) => display || "flex"};
  align-items: center;
`;
