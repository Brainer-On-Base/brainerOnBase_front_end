import React from "react";
import { CoinContainer, CoinLabel, CoinLabelContainer } from "./HCoin.styled";

const HCoinLabel = ({
  value,
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
          src={"./commonBrainer.png"}
          alt={"brainer"}
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
