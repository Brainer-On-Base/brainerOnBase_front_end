import React from "react";
import { HBox } from "../../../HocComponents";

const HubSellToDao = () => {
  return (
    <HBox
      width="100%"
      justify="center"
      align="center"
      height="100%"
      padding="20px"
      direction="column"
      gap="10px"
    >
      <h2 style={{ color: "white" }}>Vender al DAO</h2>
      <p style={{ color: "#aaa", textAlign: "center" }}>
        Aquí puedes devolver tus ítems al DAO y recuperar tu inversión inicial.
        El precio será el de compra original.
      </p>
      {/* Acá ponés la lógica para listar y vender al DAO */}
    </HBox>
  );
};

export default HubSellToDao;
