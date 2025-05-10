import React from "react";
import { StyledBubbleDialog } from "./bubbleDialog.styled";

export default function BubbleDialog({
  $active,
  children,
  positionStyle,
  positionDialogSpik,
  width = "200px",
  ...props
}) {
  return (
    <StyledBubbleDialog
      position={positionStyle}
      width={width}
      positionspik={positionDialogSpik}
      {...props}
      style={{ display: $active ? "block" : "none", overflow: "hidden" }}
    >
      {children}
    </StyledBubbleDialog>
  );
}
