import React from "react";
import {
  Toggle,
  ToggleButton,
  ToggleContainer,
  ToggleLabel,
  ToggleOption,
} from "./HToggleButton.styled";
import HBox from "../HBox/HBox";

const HToggleButton = ({
  label,
  labelSize,
  labelColor,
  labelWeight,
  option1 = "On",
  option2 = "Off",
  off,
  on,
  onClickToggle,
  useHocStyle = false,
  ...props
}) => {
  return (
    <HBox direction="column" {...props}>
      <ToggleLabel
        labelSize={labelSize}
        labelColor={labelColor}
        labelWeight={labelWeight}
      >
        {label}
      </ToggleLabel>
      <ToggleContainer off={true}>
        <ToggleOption style={{ color: "green" }} useHocStyle={useHocStyle}>
          {option1}
        </ToggleOption>
        <Toggle
          off={off}
          on={on}
          onClick={onClickToggle}
          useHocStyle={useHocStyle}
        >
          <ToggleButton
            off={off}
            on={on}
            child={on}
            useHocStyle={useHocStyle}
          />
        </Toggle>
        <ToggleOption style={{ color: "red" }} useHocStyle={useHocStyle}>
          {option2}
        </ToggleOption>
      </ToggleContainer>
    </HBox>
  );
};

export default HToggleButton;
