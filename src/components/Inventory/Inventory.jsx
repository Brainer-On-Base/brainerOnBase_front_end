import React from "react";
import { HBox } from "../../HocComponents";
import { minHeight } from "@mui/system";

const Inventory = () => {
  return (
    <HBox
      width="100%"
      background={"shadePurpleDark"}
      borderRadius="10px"
      height="100%"
      direction="column"
      justify="center"
      align="center"
      style={{ zIndex: 999, minHeight: "90vh" }}
      overflowX="hidden"
      padding="20px 5px"
    ></HBox>
  );
};

export default Inventory;
