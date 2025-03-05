import React, { useEffect, useState } from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import NightBackground from "../components/NIghtBackground";
import { View } from "@react-three/drei";
import { motion } from "framer-motion";
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
import GenericTitle from "../components/GenericTitle/GenericTitle";
import { SyncLoader } from "react-spinners";

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
  const NFT_QUANTITY = 8000;
  const NFTs_PER_PAGE = 30;
  const [nftSelected, setNftSelected] = useState(null);
  const [nftList, setNftList] = useState([]);
  const [mintedNftList, setMintedNftList] = useState(() => {
    const storedMintedNftList = localStorage.getItem("mintedNftList");
    return storedMintedNftList ? JSON.parse(storedMintedNftList) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const {
    getIPFSInfo,
    getMintedNFTs,
    mint_BPC1_NFT,
    getMintedCount,
    web3provider,
  } = UseContract();
  const { showPopUp, useTextModal } = useModals();
  const [mintedCount, setMintedCount] = useState(() => {
    const storedMintedCount = localStorage.getItem("mintedCount");
    return storedMintedCount ? parseInt(storedMintedCount) : null;
  });
  const [nftSearch, setNftSearch] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(web3provider);
  useEffect(() => {
    window.scrollTo(0, 0);
    getInfo();
    fetchMintedCount();
  }, [currentPage]);

  const fetchMintedCount = async () => {
    const count = await getMintedCount();
    setMintedCount(count);
    localStorage.setItem("mintedCount", count);
  };

  const getInfo = async () => {
    setLoading(true);
    setNftSearch("");
    const nftMintedList = await getMintedNFTs();

    const filteredNFTs = nftMintedList.slice(1);

    const sortedNFTs = filteredNFTs.sort((a, b) => {
      const aNumber = parseInt(a.uri.match(/(\d+)\.json$/)[1]);
      const bNumber = parseInt(b.uri.match(/(\d+)\.json$/)[1]);
      return aNumber - bNumber;
    });

    setMintedNftList(sortedNFTs);
    localStorage.setItem("mintedNftList", JSON.stringify(sortedNFTs));
    const data = [];

    const startIndex = (currentPage - 1) * NFTs_PER_PAGE;
    const endIndex = startIndex + NFTs_PER_PAGE;

    for (let id = startIndex; id < endIndex; id++) {
      const nft = sortedNFTs.find(
        (nft) => parseInt(nft.uri.match(/(\d+)\.json$/)[1]) === id
      );
      if (nft) {
        try {
          const info = await getIPFSInfo(nft.uri);
          data.push(info);
        } catch (error) {
          console.error(`Error fetching data for URI ${nft.uri}:`, error);
          data.push(null);
        }
      } else {
        data.push(null);
      }
    }

    setNftList(data);
    setLoading(false);
  };

  const handleSearch = async (id) => {
    const nft = mintedNftList.find(
      (nft) => parseInt(nft.uri.match(/(\d+)\.json$/)[1]) === id
    );
    if (!nft) {
      setNftList([
        {
          id,
          image: "/nftCollectionImages/unknown.png",
          name: `NFT ${id} not found`,
        },
      ]);
      return;
    }
    try {
      const info = await getIPFSInfo(nft.uri);
      setNftList([info]);
    } catch (error) {
      console.error(`Error fetching data for URI ${nft.uri}:`, error);
      setNftList([
        {
          id,
          image: "/nftCollectionImages/unknown.png",
          name: `NFT ${id} not found`,
        },
      ]);
    }
  };

  return (
    <StyledAppContainer>
      <Navbar />
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

      <HBox direction="column" align="center" justify="center" width="100%">
        <GenericTitle
          title="Pixel Brainer"
          subtitle="Collection"
          style={{ marginTop: "1em" }}
        />
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
              <p className="minted-quantity">{`${mintedCount}/8000 minted`}</p>
            )}
          </HBox>

          <HBox>
            {nftList.length === 1 && (
              <HButton
                className="animate__animated animate__fadeIn animate__delay"
                onClick={() => getInfo()}
              >
                Cancel Search
              </HButton>
            )}
            <HSearchInput
              placeholder="Search by id"
              margin="0 1em 0 0"
              width="200px"
              value={nftSearch}
              onChange={(e) => setNftSearch(e.target.value)}
              type="number"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const id = Number(nftSearch);
                  if (isNaN(id) || id < 0 || id > 8000) {
                    HPopUp({
                      type: "error",
                      message:
                        "Invalid ID. Please enter a number between 0 and 8000",
                    });
                    return;
                  }

                  handleSearch(id);
                }
              }}
            />
            <HPagination
              totalPages={Math.ceil(NFT_QUANTITY / NFTs_PER_PAGE)}
              currentPage={currentPage}
              setPagination={setCurrentPage}
              margin="0 0 0 1em"
            />
          </HBox>
        </HBox>
        {loading ? (
          <HBox width="90%" justify="center" align="center" height="40vh">
            <SyncLoader loading={loading} color="#ba68c8" />
          </HBox>
        ) : (
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
        )}
      </HBox>
      {nftSelected && (
        <NftDetails
          nftSelected={nftSelected}
          setNftSelected={setNftSelected}
          nftList={mintedNftList}
        />
      )}

      <Footer />
    </StyledAppContainer>
  );
};

export default NftCollectionList;
