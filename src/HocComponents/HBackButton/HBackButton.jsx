import React from "react";
import { BackArrow } from "./HBackButton.styled";
import backArrow from "../../../assets/icons/booking/backArrow.svg";

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
      <img src={backArrow} alt="BACK" />
    </BackArrow>
  );
};

export default HBackButton;
