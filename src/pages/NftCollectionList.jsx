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
  HTitle,
} from "../HocComponents";
import { SiOpensea } from "react-icons/si";
import GenericTitle from "../components/GenericTitle/GenericTitle";
import { SyncLoader } from "react-spinners";
import AppLayout from "../components/AppLayout/AppLayout";
import NFTMintModal from "../components/Modals/NFTMintModal";
import AccountContext from "../provider/AccountProvider/AccountContext";
import FiltersPanel from "../components/FilterNftList";
import { FaFilter } from "react-icons/fa6";
import Loader from "../components/Loader/Loader";
import BrainerOnBaseService from "../service/BrainerOnBaseService";

const StyledNFTList = styled(HBox)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
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
    .filterspanel {
      display: none;
    }
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
  const NFT_QUANTITY = 50;
  const NFTs_PER_PAGE = 40;
  const [nftSelected, setNftSelected] = useState(null);
  const [nftList, setNftList] = useState([]);
  const [mintedNftList, setMintedNftList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { web3provider } = useContext(AccountContext);
  const { getMintedCount } = useContractPBC1();
  const [showModal, setShowModal] = useState(false);
  const [mintedCount, setMintedCount] = useState(0);
  const [nftSearch, setNftSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [loadingMint, setLoadingMint] = useState(false);
  const [filters, setFilters] = useState({
    eyes: "",
    hat: "",
    mouth: "",
    background: "",
    extra: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNFTs(filters);
    fetchMintedCount();
  }, [currentPage, refreshCount, filters, showFilters]);

  const fetchNFTs = async (filters) => {
    setLoading(true);
    let filtersToUse = filters;
    if (!showFilters) filtersToUse = {};
    else setCurrentPage(1); // Reset to page 1 when filters are applied
    try {
      const params = {
        page: currentPage,
        limit: NFTs_PER_PAGE,
        minted: showFilters ? true : undefined,
        ...filtersToUse, // 🔥 Acá se agregan dinámicamente los filtros
      };
      const response = await BrainerOnBaseService.getAllNFTs(params);
      setNftList(response.data);
    } catch (error) {
      console.error("Error fetching NFTs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (id) => {
    setLoading(true);
    try {
      const response = await BrainerOnBaseService.getNFTById(id);
      console.log("NFT response:", response);
      setNftList([response.data]);
    } catch (error) {
      console.error("Error searching NFT:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchMintedCount = async () => {
    const count = await getMintedCount();
    setMintedCount(count);
  };

  return (
    <AppLayout>
      {loadingMint && <Loader showLoading={loadingMint} />}
      <StyledNFTListContainer
        direction="column"
        align="center"
        justify="center"
        width="100%"
      >
        <NFTMintModal
          setShowModal={setShowModal}
          showModal={showModal}
          setLoading={setLoadingMint}
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
              className="filterspanel"
              style={{ zIndex: 999 }}
              title="Show filters"
              fontSize={"1.5em"}
              padding={"0.9em 1.2em"}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
            </HButton>

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
              onClick={() => setShowModal(true)}
            >
              MINT
            </HButton>
            {web3provider && (
              <p className="minted-quantity">{`${mintedCount}/${NFT_QUANTITY} minted`}</p>
            )}
          </HBox>
          <HBox className="nft-list-actions2">
            {nftList?.length === 1 && (
              <HButton
                className="animate__animated animate__fadeIn animate__delay"
                onClick={() => fetchNFTs()}
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
          <HBox
            align="flex-start"
            justify="center"
            width="100%"
            maring="0 auto"
          >
            {showFilters && (
              <FiltersPanel
                showFilters={showFilters}
                setShowFilters={setShowFilters}
                setFilters={setFilters}
                filters={filters}
              />
            )}
            <StyledNFTList
              align="center"
              justify="space-between"
              width="90%"
              wrap="wrap"
              margin="1em 0"
            >
              {nftList?.length === 0 && (
                <HBox
                  width="100%"
                  justify="center"
                  align="center"
                  height="40vh"
                  margin="0 auto"
                >
                  <HTitle fontSize={"2em"} color="white">
                    No NFTs found
                  </HTitle>
                </HBox>
              )}
              {nftList?.map((nft, index) => (
                <FloatAnimation
                  delay={index}
                  key={index}
                  title={!nft ? "Unknown Brainer - Not minted yet!" : nft.name}
                >
                  <motion.div
                    className={`animate__animated animate__fadeInUp animations`}
                    onClick={() => {
                      if (!nft.image) return false;
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
          </HBox>
        )}
        <HPagination
          totalPages={Math.ceil(NFT_QUANTITY / NFTs_PER_PAGE)}
          currentPage={currentPage}
          setPagination={setCurrentPage}
          margin="0 0 0 1em"
        />
        <FloatAnimation>
          <HBox
            padding={"25px 40px"}
            margin="4em 0 0 0"
            borderRadius={"20px"}
            background={"shadeViolet"}
            border="1px solid gold"
            direction="column"
            gap="2em"
            className="animate__animated animate__fadeInUp text-container"
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
          >
            <HTitle fontSize={"50px"} color={"goldColor"}>
              NFTS Mint Allocation
            </HTitle>
            <HTitle
              width={"80%"}
              useTitleCase={false}
              fontSize={"1.5em"}
              color="white"
            >
              All funds raised through the Pixel Brainer NFT mint will be
              allocated as follows:
            </HTitle>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>
                <HTitle useTitleCase={false} fontSize={"1.2em"} color="white">
                  💧 60% - Liquidity for the upcoming $BRNR token
                </HTitle>
              </li>
              <li>
                <HTitle useTitleCase={false} fontSize={"1.2em"} color="white">
                  🎮 20% - Development of Brainer Society Ecosystem
                </HTitle>
              </li>
              <li>
                <HTitle useTitleCase={false} fontSize={"1.2em"} color="white">
                  🚀 10% - Community growth & marketing efforts
                </HTitle>
              </li>
              <li>
                <HTitle useTitleCase={false} fontSize={"1.2em"} color="white">
                  🧑‍💻 10% - Core team & future contributors
                </HTitle>
              </li>
            </ul>
          </HBox>
        </FloatAnimation>
      </StyledNFTListContainer>

      {nftSelected && (
        <NftDetails
          nftSelected={nftSelected}
          setNftSelected={setNftSelected}
          nftList={mintedNftList}
          mintedNftList={mintedNftList}
        />
      )}
    </AppLayout>
  );
};

export default NftCollectionList;
