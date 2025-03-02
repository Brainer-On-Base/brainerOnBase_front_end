import React from "react";
import { CardPlayerActions } from "../Cards.styled";
import HCoinLabel from "../../HCoinLabel/HCoinLabel";
import deleteIcon from "../../../../assets/img/youtube/delete.svg";
import HInput from "../../HInput/HInput";
import CoinIcon from "../../../../assets/icons/music/switch-coin-gold.svg";
import DiamondIcon from "../../../..//assets/icons/music/switch-diamond-gold.svg";
import HButton from "../../HButton/HButton";

const HCardPlayerActions = ({
  totalCoins,
  totalDiamonds,
  handleCoinChange,
  handleDiamondChange,
  giveCoins,
  giveDiamonds,
  coinAmounts,
  diamondAmounts,
  handleForm,
  handleSessionQR,
}) => {
  return (
    <CardPlayerActions>
      <div className="player-coins-container">
        <div className="player-coins">
          <HCoinLabel
            value={totalCoins}
            label={"Coins"}
            direction="column"
            style={{ marginBottom: "10px" }}
          />
          <HInput
            iconDisabled={!coinAmounts}
            width="100%"
            placeholder="Coins"
            value={coinAmounts}
            onChange={handleCoinChange}
            type="number"
            icon={CoinIcon}
            iconDirection={"row-reverse"}
            iconSize="25px"
            onIconClick={giveCoins}
          />
        </div>
        <div className="player-coins">
          <HCoinLabel
            isCoin={false}
            value={totalDiamonds}
            label={"Diamonds"}
            direction="column"
            style={{ marginBottom: "10px" }}
          />
          <HInput
            iconDisabled={!diamondAmounts}
            placeholder="Diamonds"
            value={diamondAmounts}
            onChange={handleDiamondChange}
            type="number"
            icon={DiamondIcon}
            iconDirection={"row-reverse"}
            iconSize="25px"
            onIconClick={giveDiamonds}
          />
        </div>
      </div>
      <div className="buttons-actions">
        <HButton text="Check" onClick={handleForm} fontSize={"var(--p16)"} />
        <HButton
          text="QR Code"
          onClick={handleSessionQR}
          fontSize={"var(--p16)"}
        />
      </div>
      {/* <div className="delete" onClick={() => alert("not working")}>
        <img src={deleteIcon} alt="" />
      </div> */}
    </CardPlayerActions>
  );
};

export default HCardPlayerActions;
