import React from "react";
import { BackArrow } from "./HBackButton.styled";

const HBackButton = ({
  handleClick,
  position,
  margin,
  background,
  ...props
}) => {
  return (
    <BackArrow
      onClick={handleClick}
      position={position}
      margin={margin}
      background={background}
      {...props}
    >
      back
    </BackArrow>
  );
};

export default HBackButton;
