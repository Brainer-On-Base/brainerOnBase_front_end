import React, { useState } from "react";
import styled from "styled-components";
import { HBox } from "../../../HocComponents";
import { NavbarInventory } from "./NavbarInventory";
import OnSale from "./OnSale";
import SellToDao from "./SellToDao";
import MyInventory from "./MyInventory";

// 🔥 INVENTORY
const Inventory = () => {
  const [currentView, setView] = useState("inventory");

  const renderContent = () => {
    switch (currentView) {
      case "inventory":
        return <MyInventory />;
      case "onSale":
        return <OnSale />;
      case "sellDao":
        return <SellToDao />;
      default:
        return null;
    }
  };

  return (
    <HBox
      width="100%"
      height="100%"
      direction="row"
      justify="flex-start"
      align="flex-start"
      style={{ zIndex: 999, minHeight: "90vh" }}
      overflowX="hidden"
    >
      <NavbarInventory currentView={currentView} setView={setView} />

      <HBox
        background={"shadePurpleDark"}
        width="100%"
        borderRadius="10px"
        direction="column"
        justify="flex-start"
        align="center"
        padding="20px"
      >
        {renderContent()}
      </HBox>
    </HBox>
  );
};

export default Inventory;
