import React, { useState } from "react";
import { HBox } from "../../../HocComponents";
import { NavbarHub } from "./NavbarHub";
import OnSale from "./HubOnSale";
import SellToDao from "./HubSellToDao";
import MyInventory from "./HubInventory";
import HubWallet from "./HubWallet";
import HubCharacter from "./HubCharacter";
import HubNotifications from "./HubNotifications";

// 🔥 PLAYER HUB
const PlayerHub = () => {
  const [currentView, setView] = useState("character");

  const renderContent = () => {
    switch (currentView) {
      case "inventory":
        return <MyInventory />;
      case "onSale":
        return <OnSale />;
      case "sellDao":
        return <SellToDao />;
      case "notifications":
        return <HubNotifications />;
      case "character":
        return <HubCharacter />;
      case "wallet":
        return <HubWallet />;
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
      <NavbarHub currentView={currentView} setView={setView} />

      <HBox
        background={"shadePurpleDark"}
        width="100%"
        borderRadius="10px"
        direction="column"
        justify="flex-start"
        align="center"
        padding="20px"
        style={{ minHeight: "70vh" }}
        overflowY="auto"
        overflowX="hidden"
      >
        {renderContent()}
      </HBox>
    </HBox>
  );
};

export default PlayerHub;
