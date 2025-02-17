import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { themeColors } from "../../themeColors";
import { useNavigate, useParams } from "react-router-dom";
import UseContract from "../../hooks/useContract";
import {
  ArrowLeft,
  ArrowRight,
  CloseIcon,
  NFTCardContainer,
  NFTDetailsModal,
  TraitContainer,
  TraitTag,
} from "./NftDetailes.styled";

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

const NftDetails = ({ nftSelected, setNftSelected, nftList }) => {
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

  const handleNavigate = (newIndex) => {
    if (newIndex < 0 || newIndex >= nftList.length) return; // Evita índices fuera de rango

    const nextNft = nftList.find((nft) => parseInt(nft.tokenId) === newIndex);

    if (nextNft) {
      setNftSelected(nextNft);
    } else {
      console.warn(`NFT con tokenId ${newIndex} no encontrado.`);
    }
  };

  return (
    <NFTDetailsModal>
      <CloseIcon onClick={() => setNftSelected(null)} />
      <ArrowLeft
        onClick={() => handleNavigate(parseInt(nftSelected.tokenId) - 1)}
      />
      <FloatAnimation>
        <NFTCardContainer background={backgroundColor}>
          <div className="card-container">
            <h2>{nftSelected?.name}</h2>
            <img
              src={nftSelected?.image}
              alt="NFT image"
              style={{ zIndex: 99999 }}
            />
            <TraitContainer>
              {nftSelected?.attributes.map((attr, index) => (
                <TraitTag key={index}>
                  <p>
                    <strong>{attr.trait_type}:</strong> {attr.value}
                  </p>
                </TraitTag>
              ))}
            </TraitContainer>
          </div>
        </NFTCardContainer>
      </FloatAnimation>
      <ArrowRight
        onClick={() => handleNavigate(parseInt(nftSelected.tokenId) + 1)}
      />
    </NFTDetailsModal>
  );
};

export default NftDetails;
