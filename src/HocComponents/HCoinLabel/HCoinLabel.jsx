import React from "react";
import { CoinContainer, CoinLabel, CoinLabelContainer } from "./HCoin.styled";
import CoinIcon from "../../../assets/icons/coin.svg";
import DiamondIcon from "../../../assets/icons/diamond.svg";

const HCoinLabel = ({
  value,
  isCoin = true,
  label,
  direction = "column",
  labelColor = "",
  labelSize = "16px",
  customSrc,
  background,
  color,
  width,
  ...props
}) => {
  return (
    <CoinLabelContainer direction={direction} width={width}>
      {label && (
        <CoinLabel labelColor={labelColor} labelSize={labelSize}>
          {label}
        </CoinLabel>
      )}
      <CoinContainer
        {...props}
        specialButton2={true}
        background={background}
        color={color}
      >
        <img
          src={customSrc ? customSrc : isCoin ? CoinIcon : DiamondIcon}
          alt={customSrc ? "customlabel" : isCoin ? "coin" : "diamond"}
          style={{
            width: "38px",
            height: "38px",
          }}
        />
        <p>{value}</p>
      </CoinContainer>
    </CoinLabelContainer>
  );
};

export default HCoinLabel;
