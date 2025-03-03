import React from "react";
import {
  SearchInput,
  SearchInputContainer,
  SearchContainer,
  SearchLabel,
} from "./HSearchInput.styled";
import { TbSearch } from "react-icons/tb";

const HSearchInput = ({
  direction = "column", // Dirección del layout: "row" o "column"
  placeholder = "Search...",
  value = "",
  onChange,
  width, // Ancho del contenedor (por defecto se toma del theme)
  height, // Altura del contenedor
  borderColor, // Color del borde
  iconSize = "20px", // Tamaño del icono
  gap = "10px", // Espaciado entre el icono y el input
  fontSize, // Tamaño del texto (por defecto desde las variables CSS)
  fontColor, // Color del texto (por defecto desde el theme)
  fontWeight, // Peso de la fuente (por defecto desde las variables CSS)
  label,
  labelColor,
  labelSize,
  labelWeight,
  type = "text",
  ...props
}) => {
  return (
    <SearchContainer {...props} gap={gap} direction={direction}>
      {label && (
        <SearchLabel
          labelColor={labelColor}
          labelSize={labelSize}
          fontWeight={labelWeight}
        >
          {label}
        </SearchLabel>
      )}
      <SearchInputContainer
        width={width}
        height={height}
        borderColor={borderColor}
      >
        <TbSearch alt="search-icon" size={30} style={{ marginRight: "10px" }} />
        <SearchInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          fontSize={fontSize}
          fontColor={fontColor}
          fontWeight={fontWeight}
        />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default HSearchInput;
