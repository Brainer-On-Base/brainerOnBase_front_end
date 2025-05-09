import React, { useContext, useState } from "react";
import { HBox, HInput, HModal, HTitle } from "../../HocComponents";
import { motion } from "framer-motion";
import useContractPreSale from "../../hooks/contracts/useContractPreSale";
import { useEffect } from "react";
import AccountContext from "../../provider/AccountProvider/AccountContext";
import { StyledUl } from "./modals.styled";

const TokenPreSaleModal = ({ showModal, setShowModal, setLoading }) => {
  const [ethInput, setEthInput] = useState(0);
  const { buyTokens, getUserContribution } = useContractPreSale();
  const { isConnected } = useContext(AccountContext);
  const [userContribution, setUserContribution] = useState(0);

  const buyTokensFunction = async (ethAmount) => {
    setLoading(true);
    await buyTokens(ethAmount);
    setLoading(false);
  };

  useEffect(() => {
    const fetchUserContribution = async () => {
      const contribution = await getUserContribution();
      setUserContribution(contribution);
    };

    fetchUserContribution();
  }, [showModal]);

  return (
    <HModal
      confirmText="Join"
      showModal={showModal}
      buttonDisabled={ethInput < 0.02}
      onCloseFunction={() => setShowModal(false)}
      onConfirmFunction={() => buyTokensFunction(ethInput)}
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
              text: " ⚡Important⚡Each wallet purchase max 5 ETH, so make sure to grab your tokens before it's too late! 🚀",
              icon: "./commonBrainer.png",
            },
            isConnected && {
              text: `Your contribution: ${userContribution}/5.00 ETH`,
              icon: "./commonBrainer.png",
            },
          ].map((item, index) => (
            <>
              {item.icon && (
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
                    <span>{item.text} </span>
                  </HTitle>
                </motion.li>
              )}
            </>
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
          textalign={"left"}
        >
          Total:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2, // Asegura dos decimales
            maximumFractionDigits: 2, // Asegura dos decimales
          }).format(ethInput * 4000000)}{" "}
          $BRNR
        </HTitle>
      </HBox>
    </HModal>
  );
};

export default TokenPreSaleModal;
