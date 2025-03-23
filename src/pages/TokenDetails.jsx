import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout/AppLayout";
import TokenomicsSection from "../components/home/TokenomicsSection";
import TokenAddress from "../components/home/TokenAddress";
import BubbleDialog from "../components/BubbleDialog";
import { HBox, HButton, HInput, HModal, HTitle } from "../HocComponents";
import { width } from "@mui/system";
import { FloatAnimation } from "../components/NftDetails/NftDetails";
import { useNavigate } from "react-router-dom";

const StyledUl = styled(motion.ul)`
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

// Coin rotatoria
export const BrainerCoin = () => {
  return (
    <CoinWrapper
      animate={{ rotateY: 360 }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
    >
      <CoinContainer>
        <img
          src="/commonBrainer.png"
          alt="Brainer Token"
          width="90"
          height="90"
        />
      </CoinContainer>
    </CoinWrapper>
  );
};

const TokenDetails = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [ethInput, setEthInput] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("brnrToken");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleShowModal = (bool) => {
    setShowModal(bool);
  };

  return (
    <AppLayout
      useCoinRain={false}
      title="BRAINER TOKEN"
      subtitle="$BRNR"
      id={"brnrToken"}
      style={{ marginTop: "1em" }}
    >
      <HModal
        confirmText="Join"
        showModal={showModal}
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
            label={"ETH Amount (0.02 - 5)"}
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
      <HBox
        direction="column"
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
          marginTop: "2em",
        }}
      >
        {/* Rocket + Dialog */}
        <RocketContainer>
          <motion.img
            src="/brainerCoin5.png"
            alt="Brainer Rocket"
            width="200px"
            height="200px"
            style={{
              position: "absolute",
              left: "-15px",
              bottom: "110px",
              transform: "scaleX(-1)", // Flip hacia la izquierda
            }}
            initial={{
              x: -300, // Comienza 300px a la izquierda (ajustable)
              opacity: 0, // Desaparecido al principio
            }}
            animate={{
              x: 0, // Termina en su posición natural (left: 0)
              opacity: 1,
              y: [0, -10, 0], // Movimiento flotante continuo
            }}
            transition={{
              x: { duration: 1.5, ease: "easeOut" }, // Entrada suave desde la izquierda
              opacity: { duration: 1.5 },
              y: {
                delay: 1.5, // Espera a que termine el movimiento de entrada antes de flotar
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          <BubbleDialog
            id="bubbletokenomics"
            active={true}
            positionDialogSpik={{
              left: "10%",
              bottom: "-4px",
              rotate: "10deg",
            }}
            positionStyle={{
              left: "100px",
              top: "-80px",
            }}
            width="220px"
            height="10px"
            className="animate__animated animate__fadeInUp animate__delay-1s"
          >
            <HTitle fontSize={"16px"} color="black" useTitleCase={false}>
              Are you a no brainer?
            </HTitle>
          </BubbleDialog>
        </RocketContainer>
        {/* Info Box */}

        <HBox
          direction="column"
          style={{ gap: "2em" }}
          width="100%"
          justify="center"
          align="center"
        >
          <HBox
            direction="column"
            style={{ gap: "3em", marginTop: "-2em", marginBottom: "2em" }}
            width={"100%"}
            align="flex-end"
            justify="center"
          >
            <FloatAnimation>
              <HBox
                width={"70%"}
                padding={"25px 40px"}
                borderRadius={"20px"}
                background={"shadeViolet"}
                border="1px solid gold"
                direction="column"
                gap="2em"
                className="animate__animated animate__fadeInUp"
              >
                <HTitle fontSize={"50px"} color={"goldColor"}>
                  Be part of the journey
                </HTitle>
                <Paragraph useTitleCase={false}>
                  <strong>$BRNR</strong> is more than just a currency; it’s the
                  symbol of our community, the engine that drives our ideas and
                  our mission to break free from centralized control.
                </Paragraph>
                <HBox>
                  <PreSaleButton onClick={() => handleShowModal(true)}>
                    Join Pre-Sale Now 🚀
                  </PreSaleButton>
                  <PreSaleButton
                    onClick={() => {
                      const element = document.getElementById("join-whitelist");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    More details
                  </PreSaleButton>
                </HBox>
              </HBox>
            </FloatAnimation>
          </HBox>
        </HBox>
      </HBox>

      <TokenAddress style={{ marginTop: "4em" }} />
      <TokenomicsSection />

      <InfoContainer id="join-whitelist">
        <SectionTitle>🔥 How to Join the Whitelist</SectionTitle>
        <ListItem useTitleCase={false}>
          1️⃣ Hold a <strong>Pixel Brainer NFT</strong> ➤ You'll automatically
          receive an exclusive <strong>airdrop</strong> of $BRNR tokens.
        </ListItem>
        <ListItem useTitleCase={false}>
          2️⃣ Participate in the <strong>Pre-Sale</strong> ➤ Contribute{" "}
          <strong>0.02 ETH</strong> (max 5) through the Pre-Sale Button and
          receive $BRNR tokens equivalent to your contribution.
        </ListItem>
        <ListItem useTitleCase={false}>
          🔥 Combine Both! ➤ Hold a Pixel Brainer NFT <strong>and</strong> join
          the Pre-Sale to unlock <strong>both</strong> benefits:
          <ul>
            <li>An airdrop of $BRNR tokens</li>
            <li>Plus the token equivalent of your Pre-Sale contribution</li>
          </ul>
        </ListItem>

        <Divider />

        <SectionTitle>🚀 Token Distribution & Liquidity Plan</SectionTitle>
        <ListItem useTitleCase={false}>
          • All ETH collected from the <strong>Pre-Sale</strong> will be
          injected into the liquidity pool of $BRNR, ensuring a strong market
          foundation.
        </ListItem>
        <ListItem useTitleCase={false}>
          • Funds raised from NFT sales will be reinvested into the Brainer
          Society project: game development, marketing, and ecosystem expansion.
        </ListItem>

        <Paragraph
          useTitleCase={false}
          textAlign={"center"}
          margin={"2em 0 0 0"}
        >
          By supporting the project early, you're not only securing your spot in
          the Brainer Society—you’re also fueling our journey to
          decentralization and innovation.
        </Paragraph>
        <PreSaleButton
          margin={"2em 0 0 0"}
          onClick={() => handleShowModal(true)}
          width={"100%"}
        >
          Join Pre-Sale Now 🚀
        </PreSaleButton>
      </InfoContainer>
    </AppLayout>
  );
};

export const RocketContainer = styled.div`
  height: 300px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
`;

export const InfoContainer = styled.div`
  width: 50%;
  background: ${({ theme }) => theme.shadeViolet || "#2c003e"};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid gold;
`;

export const Title = styled(HTitle)`
  font-size: 32px;
  color: gold;
`;

export const Subtitle = styled(HTitle)`
  font-size: 24px;
  color: white;
`;

export const Paragraph = styled(HTitle)`
  font-size: 24px;
  color: #d1d1d1;
  line-height: 1.5;
  text-align: center;
`;

export const SectionTitle = styled(HTitle)`
  font-size: 30px;
  color: gold;
`;

export const ListItem = styled(HTitle)`
  font-size: 16px;
  color: #ffffff;
  line-height: 1.5;
  ul {
    margin-top: 0.5em;
    padding-left: 1.2em;
    li {
      list-style-type: disc;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid gold;
  margin: 1em 0;
`;

export const PreSaleButton = styled(HButton)`
  /* color: #2c003e; */
  padding: 15px 30px;
  border-radius: 12px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 15px rgba(255, 12, 223, 0.6);
  }
`;

export const CoinWrapper = styled(motion.div)`
  width: 80px;
  height: 80px;
`;

export const CoinContainer = styled.div`
  background: ${({ theme }) => theme.shadePurpleDark || "#2c003e"};
  border: 2px solid gold;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TokenDetails;
