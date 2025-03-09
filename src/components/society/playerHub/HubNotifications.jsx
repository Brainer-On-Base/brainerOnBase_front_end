import React from "react";
import { HBox } from "../../../HocComponents";

const HubNotifications = () => {
  return (
    <HBox
      width="100%"
      justify="center"
      align="center"
      height="100%"
      padding="20px"
    >
      <h2 style={{ color: "white" }}>Notificaciones</h2>
      {/* Aquí listás los ítems que el user haya puesto en venta */}
    </HBox>
  );
};

export default HubNotifications;
