import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { themeColors } from "../../themeColors";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import UseContract from "../../hooks/useContract";

const TraitContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas iguales */
  gap: 1em; /* Espaciado entre las columnas y filas */
  margin: 1em 0;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  z-index: 9999999;
  align-items: stretch;
`;

const NFTCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5em;
  max-width: 850px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #2a0845, #6441a5); /* Fondo degradado */
  color: #ffffff;
  overflow: hidden;
  z-index: 9999999;
  height: 700px;

  .card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.2); /* Fondo translúcido */
    z-index: 9999999;

    h2 {
      margin: 0 0 0.5em;
      font-size: 2em;
      font-weight: bold;
      color: #ffe600; /* Color destacado para el título */
      text-align: center;
    }
  }

  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 15px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 814px) {
    max-width: 100%;
    padding: 1em;
  }
`;

const TraitTag = styled.div`
  background: rgba(255, 255, 255, 0.1); /* Fondo translúcido */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Bordes suaves */
  padding: 0.5em;
  border-radius: 10px;
  font-size: 14px;
  text-align: left;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  transition: transform 0.3s ease, background 0.3s ease; /* Suaviza hover */

  &:hover {
    transform: translateY(-5px); /* Desplazamiento hacia arriba */
    background: rgba(255, 255, 255, 0.2); /* Color más visible */
  }

  p {
    margin: 0;
  }
`;

const FloatAnimation = styled.div`
  z-index: 999999999;
  animation: float 3s ease-in-out infinite;

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

const ArrowLeft = styled(TbArrowBigLeftFilled)`
  z-index: 999999;
  margin: 0 1em;
  font-size: 5em;
  color: #ffffff; /* Color base */
  transition: transform 0.3s ease, color 0.3s ease; /* Suaviza animaciones */

  &:hover {
    cursor: pointer;
    transform: scale(1.2); /* Hace la flecha más grande al hover */
    color: #ff437d; /* Color vibrante para combinar con las cartas */
  }

  &:active {
    transform: scale(1.1); /* Pequeña compresión al hacer clic */
    color: #ffe600; /* Un toque de amarillo brillante al clic */
  }
`;

const ArrowRight = styled(TbArrowBigRightFilled)`
  z-index: 999999;
  margin: 0 1em;
  font-size: 5em;
  color: #ffffff; /* Color base */
  transition: transform 0.3s ease, color 0.3s ease; /* Suaviza animaciones */

  &:hover {
    cursor: pointer;
    transform: scale(1.2); /* Hace la flecha más grande al hover */
    color: #ff437d; /* Color vibrante para combinar con las cartas */
  }

  &:active {
    transform: scale(1.1); /* Pequeña compresión al hacer clic */
    color: #ffe600; /* Un toque de amarillo brillante al clic */
  }
`;

const NFTDetailsModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.449);
  padding: 2em;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 999999999999;
  width: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NftDetails = ({ nftSelected, setNftSelected, nftList }) => {
  const [backgroundColor, setBackgroundColor] = useState("#230f44");
  console.log(nftSelected);

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
