import React, { useEffect, useState } from "react";
import {
  StyledAppContainer,
  StyledNFTDetailsContainer,
} from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import NightBackground from "../components/NIghtBackground";
import { View } from "@react-three/drei";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../components/styled-components/buttons";
import UseContract from "../hooks/useContract";
import { themeColors } from "../themeColors";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";

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
  max-width: 450px;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #2a0845, #6441a5); /* Fondo degradado */
  color: #ffffff;
  overflow: hidden;
  z-index: 9999999;

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

const NFTDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

const NftDetails = () => {
  const { id } = useParams();
  const [showHistory, setShowHistory] = useState("/home");
  const [nftData, setNftData] = useState(null);
  const { getIPFSInfo } = UseContract();
  const [backgroundColor, setBackgroundColor] = useState("#230f44");
  const navigate = useNavigate();

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Tiempo entre la animación de cada <li>
        duration: 0.5, // Duración de la animación del contenedor
      },
    },
  };
  useEffect(() => {
    // Cargar el JSON desde la carpeta public
    getInfo();
    // window.scrollTo(0, 0);
  }, [id]);

  const getInfo = async () => {
    const data = await getIPFSInfo(id);
    setNftData(data);
    const backgroundColor = data.attributes.filter(
      (attr) => attr.trait_type === "Background"
    );
    setBackgroundColor(
      themeColors[backgroundColor[0].value.toLowerCase() + "Violet"]
    );
  };

  const handleNavigate = (id) => {
    console.log(id);
    if (id < 0 || id > 49) return;
    navigate(`/nft-details/${id}`);
  };

  return (
    <StyledAppContainer>
      <Navbar setItem={setShowHistory} item={showHistory} />
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
        }}
      >
        <NightBackground />
      </View>
      <StyledNFTDetailsContainer>
        <h1
          className={`animate__animated animate__fadeInDown animations title`}
        >
          Pixel Brainer
        </h1>
        <h1
          className={`animate__animated animate__fadeInDown animations title`}
        >
          Collection
        </h1>
        <NFTDetailsContainer>
          <ArrowLeft onClick={() => handleNavigate(parseInt(id) - 1)} />
          <FloatAnimation>
            <NFTCardContainer background={backgroundColor}>
              <div className="card-container">
                <h2>{nftData?.name}</h2>
                <img
                  src={nftData?.image}
                  alt="NFT image"
                  style={{ zIndex: 99999 }}
                />
                <TraitContainer>
                  {nftData?.attributes.map((attr, index) => (
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
          <ArrowRight onClick={() => handleNavigate(parseInt(id) + 1)} />
        </NFTDetailsContainer>
      </StyledNFTDetailsContainer>
      <StyledButton
        style={{
          marginTop: "2em",
        }}
      >
        SEE COLLECTION ON OPEN SEA
      </StyledButton>
      <Footer />
    </StyledAppContainer>
  );
};

export default NftDetails;
