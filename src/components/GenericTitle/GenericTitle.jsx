import React from "react";
import { HBox } from "../../HocComponents";
import { StyledTitle } from "./genericTitle.styled";

const GenericTitle = ({ title, subtitle, subtitleFontSize, ...props }) => {
  return (
    <HBox direction="column" {...props} style={{ zIndex: 999 }}>
      <StyledTitle
        style={{
          marginTop: "1em",
        }}
        className={`animate__animated animate__fadeInDown animations`}
      >
        {title}
      </StyledTitle>
      {subtitle && (
        <StyledTitle
          $subtitleFontSize={subtitleFontSize}
          style={{ marginTop: "-1em" }}
          className={`animate__animated animate__fadeInDown animate__delay-1s animations`}
        >
          {subtitle}
        </StyledTitle>
      )}
    </HBox>
  );
};

export default GenericTitle;
