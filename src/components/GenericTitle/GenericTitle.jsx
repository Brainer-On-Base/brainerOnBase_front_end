import React from "react";
import { HBox } from "../../HocComponents";
import styled from "styled-components";

const StyledTitle = styled.h1`
  line-height: 1.1;
  transition: filter 300ms;
  font-family: "Luckiest Guy", cursive;
  text-shadow: 0 0.0377358491em 0 #f8b8b8,
    0.0125786164em 0.0377358491em 0 #f8b8b8,
    0.0125786164em -0.0125786164em 0 #f8b8b8,
    -0.0125786164em 0.0125786164em 0 #f8b8b8, -0.0125786164em -0.0125786164em;
  &:nth-of-type(1) {
    margin-top: 40px;
    font-size: 90px;
    color: #ff437d;
  }
  &:nth-of-type(2) {
    margin-top: -30px;
    font-size: ${(props) => props.subtitleFontSize || "80px"};
    color: #888;
    color: white;
    text-shadow: none;
  }
`;

const GenericTitle = ({ title, subtitle, subtitleFontSize, ...props }) => {
  return (
    <HBox direction="column" {...props}>
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
          subtitleFontSize={subtitleFontSize}
          className={`animate__animated animate__fadeInDown animate__delay-1s animations`}
        >
          {subtitle}
        </StyledTitle>
      )}
    </HBox>
  );
};

export default GenericTitle;
