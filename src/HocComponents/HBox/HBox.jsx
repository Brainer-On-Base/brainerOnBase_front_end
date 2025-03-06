import React from "react";
import PropTypes from "prop-types";
import { HBoxContainer } from "./HBox.styled";

const HBox = ({
  children,
  direction = "row", // Dirección por defecto
  gap = "10px", // Espaciado entre elementos
  align = "center", // Alineación en el eje cruzado
  justify = "center", // Justificación en el eje principal
  wrap = "nowrap", // Si permite wrap en contenido
  width = "auto", // Ancho del contenedor
  height = "auto", // Altura del contenedor
  padding = "0", // Padding del contenedor
  margin = "0", // Margin del contenedor
  border = "none", // Border del contenedor
  borderRadius = "0", // Radio de bordes
  background,
  overflowX = "visible",
  overflowY = "visible",
  boxShadow,
  customBorder,
  ...props
}) => {
  return (
    <HBoxContainer
      background={background}
      direction={direction}
      gap={gap}
      align={align}
      justify={justify}
      wrap={wrap}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      overflowX={overflowX}
      overflowY={overflowY}
      boxShadow={boxShadow}
      customBorder={customBorder}
      {...props}
    >
      {children}
    </HBoxContainer>
  );
};

export default HBox;
