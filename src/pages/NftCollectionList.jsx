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
import useModals from "../hooks/useSweetAlert";
import { APP_TEXTS } from "../APP_TEXTS";
import {
  HBox,
  HButton,
  HPagination,
  HPopUp,
  HSearchInput,
} from "../HocComponents";
import { SiOpensea } from "react-icons/si";

const StyledNFTList = styled(HBox)`
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
  const [nftQuantity, setNftQuantity] = useState(10);
  const [showHistory, setShowHistory] = useState("/home");
  const [nftSelected, setNftSelected] = useState(null);
  const [nftList, setNftList] = useState([]);
  const {
    getIPFSInfo,
    getMintedNFTs,
    mint_BPC1_NFT,
    getMintedCount,
    web3provider,
  } = UseContract();
  const { showPopUp, useTextModal } = useModals();
  const [mintedCount, setMintedCount] = useState(null);
  const [nftSearch, setNftSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    getInfo();

    fetchMintedCount();
  }, []);

  const fetchMintedCount = async () => {
    const count = await getMintedCount();
    setMintedCount(count);
  };

  const getInfo = async () => {
    const nftMintedList = await getMintedNFTs(); // Llamada a la función para obtener los NFTs minteados

    // Filtra el primer elemento
    const filteredNFTs = nftMintedList.slice(1);

    // Ordena los NFTs por el número al final de la URI
    const sortedNFTs = filteredNFTs.sort((a, b) => {
      const aNumber = parseInt(a.uri.match(/(\d+)\.json$/)[1]);
      const bNumber = parseInt(b.uri.match(/(\d+)\.json$/)[1]);
      return aNumber - bNumber;
    });

    const data = [];

    for (let id = 0; id < nftQuantity; id++) {
      const nft = sortedNFTs.find(
        (nft) => parseInt(nft.uri.match(/(\d+)\.json$/)[1]) === id
      );
      if (nft) {
        try {
          const info = await getIPFSInfo(nft.uri); // Llamada a tu función que interactúa con IPFS
          data.push(info); // Agregar la respuesta al array
        } catch (error) {
          console.error(`Error fetching data for URI ${nft.uri}:`, error);
          data.push(null); // En caso de error, agregar un valor nulo
        }
      } else {
        data.push(null); // Si no existe el NFT, agregar un valor nulo
      }
    }

    setNftList(data); // Actualizar el estado con los datos obtenidos
  };

  const handleSearch = (id) => {};

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
        <HBox align="center" justify="space-between" width="90%" wrap="wrap">
          <HBox>
            <HButton
              style={{ zIndex: 999 }}
              title="OpenSea"
              fontSize={"1.5em"}
              padding={"0.9em 1.2em"}
            >
              <SiOpensea />
            </HButton>
            <HButton
              fontSize={"1.5em"}
              padding={"0.8em 1.2em"}
              style={{ zIndex: 999 }}
              className={"animate__animated animate__fadeIn animate__delay-2s"}
              onClick={() =>
                useTextModal({
                  textButton: APP_TEXTS.HOME_MODAL_TEXT_BUTTON,
                  title: APP_TEXTS.HOME_MODAL_TITLE,
                  text: APP_TEXTS.HOME_MODAL_DESCRIPTION,
                  textColor: "white",
                  onConfirmFunction: async () => await mint_BPC1_NFT(),
                })
              }
              disabled={!web3provider || mintedCount >= 8000}
            >
              MINT
            </HButton>

            {web3provider && (
              <p className="animate__animated animate__fadeIn animate__delay-2s minted-quantity">{`${mintedCount}/8000 minted`}</p>
            )}
          </HBox>

          <HBox>
            <HSearchInput
              placeholder="Search by id"
              margin="0 1em 0 0"
              width="200px"
              value={nftSearch}
              onChange={(e) => setNftSearch(e.target.value)}
              type="number"
              onKeyDown={(e) => {
                console.log(e.key);
                if (e.key === "Enter") {
                  const id = Number(nftSearch); // Convertir a número
                  console.log(isNaN(id) || id < 0 || id > 8000);
                  if (isNaN(id) || id < 0 || id > 8000) {
                    HPopUp({
                      type: "error",
                      message:
                        "Invalid ID. Please enter a number between 0 and 8000",
                    });
                    return;
                  }

                  handleSearch(id); // Ejecutar la búsqueda
                }
              }}
            />
            <HPagination
              totalPages={8000 / nftQuantity}
              currentPage={nftQuantity / 10}
              setPagination={setNftQuantity}
              margin="0 0 0 1em"
            />
          </HBox>
        </HBox>
        <StyledNFTList
          align="center"
          justify="space-between"
          width="90%"
          wrap="wrap"
          margin="1em 0"
        >
          {nftList.map((nft, index) => (
            <FloatAnimation delay={index} key={index}>
              <motion.div
                className={`animate__animated animate__fadeInUp animations`}
                onClick={() => {
                  if (!nft) return false;
                  setNftSelected(nft);
                }}
              >
                <img
                  src={nft?.image ?? "/nftCollectionImages/unknown.png"}
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
