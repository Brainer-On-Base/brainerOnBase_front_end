import React from "react";
import {
  DropdownContainer,
  DropdownLabel,
  DropdownOption,
  DropdownSelect,
} from "./HDropdown.styled";

const HDropdown = ({
  label = "Select an option:",
  options = [],
  additionalOptions = [],
  value,
  onChange,
  direction = "column",
  width = "auto",
  height = "40px",
  gap = "10px",
  labelColor = "",
  labelSize = "16px",
  selectPadding = "10px 20px",
  labelPosition = "left",
  id,
  name,
  ...props
}) => {
  return (
    <DropdownContainer direction={direction} gap={gap} {...props} width={width}>
      <DropdownLabel
        labelColor={labelColor}
        labelSize={labelSize}
        labelPosition={labelPosition}
      >
        {label}
      </DropdownLabel>
      <DropdownSelect
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        selectPadding={selectPadding}
      >
        {/* Opciones adicionales */}
        {additionalOptions?.map((option) => {
          const value = option?.value ?? option;
          const label = option?.label ?? option;
          const disabled = option?.disabled ?? false;

          return (
            <DropdownOption
              key={`additional-${value}`}
              value={value}
              disabled={disabled}
            >
              {label}
            </DropdownOption>
          );
        })}

        {/* Opciones dinámicas */}
        {options?.map((option) => {
          const value = option?.value ?? option;
          const label = option?.label ?? option;
          const disabled = option?.disabled ?? false;

          return (
            <DropdownOption
              key={`option-${value}`}
              value={value}
              disabled={disabled}
            >
              {typeof label === "string"
                ? label?.[0]?.toUpperCase() + label?.slice(1)
                : label}
            </DropdownOption>
          );
        })}
      </DropdownSelect>
    </DropdownContainer>
  );
};

export default HDropdown;
