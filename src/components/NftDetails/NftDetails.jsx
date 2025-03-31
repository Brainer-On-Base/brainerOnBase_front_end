import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeColors } from "../../themeColors";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CloseIcon,
  NFTDetailsModal,
} from "./NftDetailes.styled";
import { HButton } from "../../HocComponents";
import NFTCard from "../NFTCard/NFTCard";

export const FloatAnimation = styled.div`
  z-index: 999999999;
  animation: float 3s ease-in-out infinite;
  animation-delay: ${({ delay }) =>
    delay !== undefined ? `${delay * 0.2}s` : "0s"};

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const NftDetails = ({ nftSelected, setNftSelected, mintedNftList }) => {
  const [backgroundColor, setBackgroundColor] = useState("#230f44");
  useEffect(() => {
    getBackground();
  }, [nftSelected]);

  const getBackground = async () => {
    const backgroundColor = nftSelected.attributes.filter(
      (attr) => attr.trait_type === "Background"
    );
    setBackgroundColor(
      themeColors[backgroundColor[0].value.toLowerCase() + "Violet"]
    );
  };
  const handleNavigate = async (type) => {
    if (mintedNftList.length === 1) return;
    let actualIndex = mintedNftList.findIndex(
      (nft) => nft.name === nftSelected.name
    );

    if (type === "+") {
      actualIndex = (actualIndex + 1) % mintedNftList.length;
    } else if (type === "-") {
      actualIndex =
        (actualIndex - 1 + mintedNftList.length) % mintedNftList.length;
    }

    setNftSelected(mintedNftList[actualIndex]);
  };

  return (
    <NFTDetailsModal>
      <HButton onClick={() => setNftSelected(null)} className="closeButton">
        <CloseIcon />
      </HButton>
      <ArrowLeft
        onClick={() => handleNavigate("-")}
        disabled={mintedNftList.length === 1}
      />
      <FloatAnimation>
        <NFTCard nftSelected={nftSelected} />
      </FloatAnimation>
      <ArrowRight
        onClick={() => handleNavigate("+")}
        disabled={mintedNftList.length === 1}
      />
    </NFTDetailsModal>
  );
};

export default NftDetails;
