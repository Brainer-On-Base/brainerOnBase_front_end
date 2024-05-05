import React from "react";
import { StyledBubbleDialog } from "./styled-components/container";

export default function BubbleDialog({
    active,
    children,
    positionStyle,
    width= '200px'
}) {


  return (
  <StyledBubbleDialog position={positionStyle} width={width} 
  style={{display: active ? 'block' : 'none'}}
  >
        {children}
  </StyledBubbleDialog>);
}
