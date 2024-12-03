import React, { useEffect, useState } from 'react';
import { StyledAppContainer, StyledNFTDetailsContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import NightBackground from "../components/NIghtBackground";
import NFTCollections from "../components/home/NFTCollections";
import { View } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { StyledButton } from '../components/styled-components/buttons';

const TraitContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const NFTImageContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0 4em;
    width: 100%;

  img {
    width: 300px;
    height: 300px;
    border-radius: 10px;
  }
`;

const TraitTag = styled.div`
    width: 200px;
    padding: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    margin: 10px 10px;
`;




const NftDetails = () => {
    const {id} = useParams();
  const [showHistory, setShowHistory] = useState('/home');
  const [nftData, setNftData] = useState(null)
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Tiempo entre la animación de cada <li>
            duration: 0.5,        // Duración de la animación del contenedor
        },
    },
  };
  useEffect(() => {
    // Cargar el JSON desde la carpeta public
    fetch(`/1stCollectionNFT/${id}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch NFT data");
        }
        return response.json();
      })
      .then((data) => {
        setNftData(data);
      })
      .catch((error) => console.error(error));
  }, [id]);


  return (
    <StyledAppContainer>
      <Navbar setItem={setShowHistory} item={showHistory}/>
      <View
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, bottom: 0 }}
    >
      <NightBackground/>
    </View>
      <StyledNFTDetailsContainer>
      <h1  className={`animate__animated animate__fadeInDown animations title`}  >Pixel Brainer</h1>
      <h1  className={`animate__animated animate__fadeInDown animations title`}  >Collection</h1>
      <h2>{nftData?.name}</h2>
      <NFTImageContainer
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.img
            src={`/1stCollectionNFT/${id}.png`}
            alt="NFT image"
            style={{ zIndex: 99999 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          />
          <TraitContainer initial="hidden" animate="visible">
            {nftData?.attributes.map((attr, index) => (
              <TraitTag
                key={index}
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <p>
                  <strong>Type:</strong> {attr.trait_type}
                </p>
                <p>
                  <strong>Value:</strong> {attr.value}
                </p>
                <p>
                  <strong>Rarity:</strong> {Math.floor(Math.random() * 100)}%
                </p>
              </TraitTag>
            ))}
          </TraitContainer>
        </NFTImageContainer>
      </StyledNFTDetailsContainer>
      <StyledButton
        style={{
            marginTop: '2em'
        }}
      >
        SEE COLLECTION ON OPEN SEA
      </StyledButton>
      <Footer />
    </StyledAppContainer>
  );
};

export default NftDetails;
