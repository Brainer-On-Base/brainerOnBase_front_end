import React from "react";
import { HButton } from "../HocComponents";

const WhitePaperButton = () => {
  return (
    <HButton
      margin={"40px 0"}
      fontSize={"2em"}
      padding={"20px 40px"}
      onClick={() => window.open("https://docs.braineronbase.com")}
    >
      WHITE PAPER
    </HButton>
  );
};

export default WhitePaperButton;
