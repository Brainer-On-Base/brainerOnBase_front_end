import React, { useEffect, useState } from "react";
import {
  StyledAppContainer,
  StyledFlexCenterContainer,
  StyledFlexFullCenterContainer,
  StyledNFTDetailsContainer,
} from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import NightBackground from "../components/NIghtBackground";
import { View } from "@react-three/drei";
import { motion } from "framer-motion";
import { StyledButton } from "../components/styled-components/buttons";
import UseContract from "../hooks/useContract";
import NftDetails, {
  FloatAnimation,
} from "../components/NftDetails/NftDetails";
import styled from "styled-components";

const StyledNFTList = styled(StyledFlexFullCenterContainer)`
  padding: 4em;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 1em;
  z-index: 99999;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 0 1em #c464ffaa);
    }
  }
`;

const NftCollectionList = () => {
  const [showHistory, setShowHistory] = useState("/home");
  const [nftSelected, setNftSelected] = useState(null);
  const [nftList, setNftList] = useState([]);
  const { getIPFSInfo, getMintedNFTs } = UseContract();

  async function getNFTS() {
    const getnft = await getMintedNFTs(); // Llamada a la función para obtener los NFTs minteados
    console.log(getnft); // Imprime el resultado directamente
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getInfo();
    getNFTS();
  }, []);

  const getInfo = async () => {
    const data = [];

    for (let id = 0; id < 50; id++) {
      try {
        const info = await getIPFSInfo(id); // Llamada a tu función que interactúa con IPFS
        data.push(info); // Agregar la respuesta al array
      } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
        data.push(null); // En caso de error, agregar un valor nulo
      }
    }

    setNftList(data); // Actualizar el estado con los datos obtenidos
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
          style={{
            marginTop: "1em",
          }}
          className={`animate__animated animate__fadeInDown animations title`}
        >
          Pixel Brainer
        </h1>
        <h1
          className={`animate__animated animate__fadeInDown animations title`}
        >
          Collection
        </h1>
        <StyledButton style={{ zIndex: 999 }}>
          SEE COLLECTION ON OPEN SEA
        </StyledButton>
        <StyledNFTList>
          {nftList.map((nft, index) => (
            <FloatAnimation delay={index} key={index}>
              <motion.div
                className={`animate__animated animate__fadeInUp animations`}
                onClick={() => setNftSelected(nft)}
              >
                <img
                  src={nft.image ?? "/nftCollectionImages/unknown.png"}
                  alt="NFT"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    margin: "1em",
                  }}
                />
              </motion.div>
            </FloatAnimation>
          ))}
        </StyledNFTList>
      </StyledNFTDetailsContainer>
      {nftSelected && (
        <NftDetails
          nftSelected={nftSelected}
          setNftSelected={setNftSelected}
          nftList={nftList}
        />
      )}

      <Footer />
    </StyledAppContainer>
  );
};

export default NftCollectionList;
