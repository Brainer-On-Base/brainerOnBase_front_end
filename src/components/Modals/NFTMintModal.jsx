import React, { useContext, useState } from "react";
import { HBox, HModal, HTitle } from "../../HocComponents";
import styled from "styled-components";
import { motion } from "framer-motion";
import useContractPBC1 from "../../hooks/useContractPBC1";
import AccountContext from "../../provider/AccountProvider/AccountContext";
import BrainerOnBaseService from "../../service/BrainerOnBaseService";

export const StyledUl = styled(motion.ul)`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    p {
      color: white !important;
    }

    .bullet-icon {
      position: static !important;
      width: 50px;
      height: 50px;
      margin-right: 1em;
    }
  }
`;
const NFTMintModal = ({
  showModal,
  setShowModal,
  setLoading,
  setRefreshCount,
}) => {
  const { mint_BPC1_NFT } = useContractPBC1();
  const mintNft = async () => {
    try {
      setLoading(true);
      const res = await mint_BPC1_NFT();
      BrainerOnBaseService.mintNFT({
        tokenId: res.tokenId,
        minted: true,
        owner: res.owner,
        walletAddress: res.walletAddress,
        name: res.name,
        image: res.image,
        attributes: res.attributes,
        metadata: res.metadata,
      });
      console.log("Minting response:", res);

      setRefreshCount((prev) => !prev); // Cambia el estado para forzar la actualización del contador
    } catch (error) {
      console.error("Error minting NFT:", error);
    }

    setLoading(false);
    setShowModal(false);
  };

  return (
    <HModal
      confirmText="Mint"
      showModal={showModal}
      onCloseFunction={() => setShowModal(false)}
      title="BRAINER NFT COLLECTION"
      onConfirmFunction={mintNft}
    >
      <HBox direction="column" width="100%">
        <StyledUl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3, // Tiempo entre la animación de cada <li>
                duration: 0.5, // Duración de la animación del contenedor
              },
            },
          }}
        >
          {[
            {
              text: "COST 0.02 ETH",
              icon: "./commonBrainer.png",
            },
            {
              text: "Owning a PIXEL BRAINER is a symbol of your support for the rise of Brainers everywhere.",
              icon: "./commonBrainer.png",
            },
            {
              text: " You're one step away from stopping being a NO BRAINER!",
              icon: "./commonBrainer.png",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 }, // Aparece desde abajo
                visible: { opacity: 1, y: 0 }, // Llega a su posición final
              }}
            >
              <img
                src={item.icon}
                alt="Bullet Point"
                className="bullet-icon"
                width={"20px"}
              />
              <HTitle fontSize={"16px"} color="white" useTitleCase={false}>
                <span>{item.text.split(":")[0]} </span>
              </HTitle>
            </motion.li>
          ))}
        </StyledUl>
      </HBox>
    </HModal>
  );
};

export default NFTMintModal;
