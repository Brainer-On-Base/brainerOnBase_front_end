import React from "react";
import { HTitleText } from "./HTitle.styled";

const HTitle = ({
  text, // Texto del título
  fontSize, // Tamaño de la fuente
  fontWeight, // Peso de la fuente
  color, // Color del texto
  textalign, // Alineación del texto
  margin, // Margen
  padding, // Padding
  lineHeight, // Altura de línea
  letterSpacing, // Espaciado entre letras
  textTransform = "uppercase", // Transformación del texto (uppercase, lowercase, etc.)
  as, // Etiqueta HTML (h1, h2, h3, etc.)
  children,
  background,
  borderRadius,
  width,
  height,
  useTitleCase = true,
  ...props
}) => {
  return (
    <HTitleText
      width={width}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      color={color}
      textalign={textalign}
      margin={margin}
      padding={padding}
      $lineHeight={lineHeight}
      $letterSpacing={letterSpacing}
      $textTransform={textTransform}
      as={as} // Permite cambiar el tipo de etiqueta (h1, h2, etc.)
      background={background}
      $borderRadius={borderRadius}
      height={height}
      $useTitleCase={useTitleCase}
      display="flex"
      {...props}
    >
      {children ?? text}
    </HTitleText>
  );
};

export default HTitle;
