import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import useContractPBC1 from "../hooks/useContractPBC1";
import NftDetails, {
  FloatAnimation,
} from "../components/NftDetails/NftDetails";
import styled from "styled-components";
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
import AppLayout from "../components/AppLayout/AppLayout";
import NFTMintModal from "../components/Modals/NFTMintModal";
import AccountContext from "../provider/AccountProvider/AccountContext";

const StyledNFTList = styled(HBox)`
  display: flex;
  flex-wrap: wrap; /* Permite que los elementos se ajusten */
  justify-content: center;
  gap: 10px; /* Espaciado entre imágenes */
  z-index: 99999;

  img {
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 0 1em #c464ffaa);
      transform: scale(1.05);
    }
  }
`;

const StyledNFTListContainer = styled(HBox)`
  @media screen and (max-width: 450px) {
    .nft-list-actions1 {
      flex-wrap: wrap;
      padding: 0;
      button {
        font-size: 1.2em;
        width: auto;
      }
      .minted-quantity {
        font-size: 1.2em;
      }
    }

    .nft-list-actions2 {
      flex-wrap: wrap;
      button {
        font-size: 1.2em;
      }
      .search-input-container {
        width: 100% !important;
      }
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
  const { web3provider } = useContext(AccountContext);
  const { getIPFSInfo, getMintedNFTs, getMintedCount } = useContractPBC1();
  const [showModal, setShowModal] = useState(false);
  const [mintedCount, setMintedCount] = useState(() => {
    const storedMintedCount = localStorage.getItem("mintedCount");
    return storedMintedCount ? parseInt(storedMintedCount) : null;
  });
  const [nftSearch, setNftSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    getInfo();
    fetchMintedCount();
  }, [currentPage, refreshCount]);
  const [onlyMinted, setOnlyMinted] = useState([]);

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

    localStorage.setItem("mintedNftList", JSON.stringify(sortedNFTs));
    const data = [];
    const mintedNftListTemplate = [];

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
          mintedNftListTemplate.push(info);
        } catch (error) {
          console.error(`Error fetching data for URI ${nft.uri}:`, error);
          data.push(null);
        }
      } else {
        data.push(null);
      }
    }

    setNftList(data);
    setMintedNftList(mintedNftListTemplate);
    setLoading(false);
  };

  const handleSearch = async (id) => {
    const nft = mintedNftList.find((nft) => {
      const numberNftSelected = nft.name.match(/#(\d+)/);
      const selectedNumber = numberNftSelected
        ? parseInt(numberNftSelected[1], 10)
        : null;
      return selectedNumber === id;
    });
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
    setNftList([nft]);
  };

  return (
    <AppLayout>
      <StyledNFTListContainer
        direction="column"
        align="center"
        justify="center"
        width="100%"
      >
        <NFTMintModal
          setShowModal={setShowModal}
          showModal={showModal}
          setLoading={setLoading}
          setRefreshCount={setRefreshCount}
        />
        <GenericTitle
          title="Pixel Brainer"
          subtitle="Collection"
          style={{ marginTop: "1em" }}
        />
        <HBox
          align="center"
          justify="space-between"
          width="100%"
          wrap="wrap"
          background={"shadeViolet"}
          padding="1em 2em"
          boxShadow={"0 0 10px #000000"}
          className="nft-list-header"
        >
          <HBox className="nft-list-actions1">
            <HButton
              style={{ zIndex: 999 }}
              title="OpenSea"
              fontSize={"1.5em"}
              padding={"0.9em 1.2em"}
            >
              <SiOpensea />
            </HButton>

            <HButton
              style={{ zIndex: 999 }}
              title="OpenSea"
              fontSize={"1.5em"}
              padding={"0.9em 1.2em"}
              onClick={() => {
                if (onlyMinted) {
                  setNftList(mintedNftList);
                } else {
                  getInfo();
                }
                setOnlyMinted(!onlyMinted);
              }} // ✅ Cierre correcto aquí
            >
              {onlyMinted ? "ONLY MINTED" : "ALL NFTs"}
            </HButton>

            <HButton
              fontSize={"1.5em"}
              padding={"0.8em 1.2em"}
              style={{ zIndex: 999 }}
              onClick={() => setShowModal(true)}
            >
              MINT
            </HButton>

            {web3provider && (
              <p className="minted-quantity">{`${mintedCount}/8000 minted`}</p>
            )}
          </HBox>

          <HBox className="nft-list-actions2">
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
        <HPagination
          totalPages={Math.ceil(NFT_QUANTITY / NFTs_PER_PAGE)}
          currentPage={currentPage}
          setPagination={setCurrentPage}
          margin="0 0 0 1em"
        />
      </StyledNFTListContainer>
      {nftSelected && (
        <NftDetails
          nftSelected={nftSelected}
          setNftSelected={setNftSelected}
          nftList={mintedNftList}
          mintedNftList={mintedNftList}
          getIPFSInfo={getIPFSInfo}
        />
      )}
    </AppLayout>
  );
};

export default NftCollectionList;
