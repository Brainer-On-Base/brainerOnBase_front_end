import React from "react";
import { CardPlayerInformation } from "../Cards.styled";
import HCoinLabel from "../../HCoinLabel/HCoinLabel";

function truncateText(text) {
  if (text?.length > 40) {
    return text?.substring(0, 40) + "...";
  }
  return text;
}

const formatDate = (date) => {
  date = new Date(date); // Convierte la fecha a objeto Date
  const day = ("0" + date.getDate()).slice(-2); // Asegura dos dígitos para el día
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Meses son de 0-11, añade 1 y asegura dos dígitos
  const year = date.getFullYear(); // Año completo
  return day + "/" + month + "/" + year; // Concatena en formato dd/mm/yyyy
};

const HCardPlayerInfo = ({
  name,
  category,
  level,
  totalCoins,
  totalCoinsDeposits,
}) => {
  return (
    <CardPlayerInformation>
      <div className="player-info">
        <div>
          <h3>{truncateText(name)}</h3>
          <p className="player-category">Category: {category}</p>
        </div>
        <p className="player-level">LV {level}</p>
      </div>
      <div className="player-coins">
        <HCoinLabel
          value={totalCoins}
          label={"Total Coins"}
          direction="column"
        />
        <HCoinLabel
          value={totalCoinsDeposits}
          label={"Coins Deposits"}
          direction="column"
        />
      </div>
    </CardPlayerInformation>
  );
};

export default HCardPlayerInfo;
