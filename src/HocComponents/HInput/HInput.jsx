import React, { useMemo } from "react";
import {
  Input,
  HInputContainer,
  InputContainer,
  InputLabel,
} from "./HInput.styled";

const HInput = ({
  id,
  direction = "column", // Dirección del layout: "row" o "column"
  placeholder = "Enter text...",
  value = "",
  type = "text",
  onChange,
  width, // Ancho del contenedor (por defecto se toma del theme)
  height, // Altura del contenedor
  borderColor, // Color del borde
  gap = "10px", // Espaciado entre el icono y el input
  fontSize, // Tamaño del texto (por defecto desde las variables CSS)
  fontColor, // Color del texto (por defecto desde el theme)
  fontWeight, // Peso de la fuente (por defecto desde las variables CSS)
  label,
  labelColor,
  labelSize,
  labelWeight,
  icon,
  iconSize = "20px",
  iconDirection = "row-reverse",
  onIconClick,
  iconDisabled = false,
  disabled = false,
  labelPosition,
  labelWidth,
  name,
  min,
  max,
  ...props
}) => {
  const handleIconClick = () => {
    if (iconDisabled) return;
    onIconClick();
  };

  const handleKeyDown = (e) => {
    if (iconDisabled) return;
    if (e.key === "Enter") {
      // Si se presiona Enter, ejecuta la acción correspondiente
      onIconClick();
    }
  };

  return (
    <HInputContainer
      id={id}
      {...props}
      gap={gap}
      direction={direction}
      width={width}
    >
      {label && (
        <InputLabel
          labelWidth={labelWidth}
          labelColor={labelColor}
          labelSize={labelSize}
          labelWeight={labelWeight}
          labelPosition={labelPosition}
        >
          {label}
        </InputLabel>
      )}
      <InputContainer direction={iconDirection} width={width} height={height}>
        {icon && (
          <div
            className="icon-container"
            onClick={handleIconClick}
            style={{ opacity: iconDisabled ? 0.5 : 1 }}
          >
            <img src={icon} alt="search-icon" style={{ width: iconSize }} />
          </div>
        )}
        <Input
          name={name}
          onKeyDown={handleKeyDown}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          fontSize={fontSize}
          fontColor={fontColor}
          fontWeight={fontWeight}
          min={min ?? null}
          max={max ?? null}
        />
      </InputContainer>
    </HInputContainer>
  );
};

export default HInput;
