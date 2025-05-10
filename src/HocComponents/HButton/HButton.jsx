import React from "react";
import { Button } from "./HButton.styled";

const HButton = ({
  onClick,
  children,
  text = "",
  background,
  color,
  width,
  height,
  fontSize,
  fontWeight,
  borderRadius,
  hoverBackground,
  activeBackground,
  padding,
  disabled = false,
  type,
  margin,
  ...props
}) => {
  return (
    <Button
      margin={margin}
      type={type}
      onClick={onClick}
      background={background}
      color={color}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      $borderRadius={borderRadius}
      hoverBackground={hoverBackground}
      activeBackground={activeBackground}
      padding={padding}
      disabled={disabled}
      style={{
        ...props.style,
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
      {...props}
    >
      {children || text}
    </Button>
  );
};

export default HButton;
