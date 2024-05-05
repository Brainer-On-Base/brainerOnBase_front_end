import React from "react";
import { StyledBubbleDialog } from "./styled-components/container";

export default function BubbleDialog({
    active,
    children,
    positionStyle,
    positionDialogSpik,
    width= '200px'
}) {


  return (
  <StyledBubbleDialog position={positionStyle} width={width} positionspik={positionDialogSpik}
  style={{display: active ? 'block' : 'none'}}
  >
        {children}
  </StyledBubbleDialog>);
}
