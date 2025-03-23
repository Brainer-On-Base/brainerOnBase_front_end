import React, { useState } from "react";
import { HBox, HInput, HModal, HTitle } from "../../HocComponents";
import styled from "styled-components";
import { motion } from "framer-motion";

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
      width: 50px;
      height: 50px;
      margin-right: 1em;
    }
  }
`;
const TokenPreSaleModal = ({ showModal, setShowModal }) => {
  const [ethInput, setEthInput] = useState(0);

  return (
    <HModal
      confirmText="Join"
      showModal={showModal}
      buttonDisabled={ethInput < 0.02}
      onCloseFunction={() => setShowModal(false)}
      title="$BRNR PRE SALE"
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
              text: "The BRNR token pre-sale is LIVE!",
              icon: "./commonBrainer.png",
            },
            {
              text: "💰 You can contribute anywhere from 0.02 ETH to 5 ETH.",
              icon: "./commonBrainer.png",
            },
            {
              text: " ⚡Important⚡Each wallet can only purchase once, so make sure to grab your tokens before it's too late! 🚀",
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
        <HInput
          className="animate__animated animate__fadeInUp"
          label={"ETH Amount (0.02 - 5 ETH)"}
          labelWeight={"bold"}
          placeholder="Enter ETH amount"
          width="80%"
          margin="1em 0"
          type="number"
          onChange={(e) =>
            setEthInput(
              e.target.value > 5 ? 5 : e.target.value < 0 ? 0 : e.target.value
            )
          }
          value={ethInput}
        />
        <HTitle
          className="animate__animated animate__fadeInUp"
          fontSize={"16px"}
          color="white"
          useTitleCase={false}
          width={"62%"}
          textAlign={"left"}
        >
          Total:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2, // Asegura dos decimales
            maximumFractionDigits: 2, // Asegura dos decimales
          }).format(ethInput * 10000)}{" "}
          $BRNR
        </HTitle>
      </HBox>
    </HModal>
  );
};

export default TokenPreSaleModal;
