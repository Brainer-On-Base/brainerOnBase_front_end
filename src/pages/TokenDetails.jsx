import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import AppLayout from "../components/AppLayout/AppLayout";
import TokenomicsSection from "../components/homeSections/tokenomics/TokenomicsSection";
import TokenAddress from "../components/homeSections/TokenAddress";
import BubbleDialog from "../components/BubbleDialog/BubbleDialog";
import { HBox, HButton, HTitle } from "../HocComponents";
import { FloatAnimation } from "../components/NftDetails/NftDetails";
import { useNavigate } from "react-router-dom";
import TokenPreSaleModal from "../components/Modals/TokenPreSaleModal";
import WhitePaperButton from "../components/WhitePaperButton";
import { display } from "@mui/system";
import Loader from "../components/Loader/Loader";

const TokenDetailContainer = styled(HBox)`
  @media screen and (max-width: 900px) {
    .disabled {
      z-index: 99;
    }
    .brnrocket {
      width: 150px;
      height: 150px;
      top: -420px;
    }

    .text-container {
      width: 100%;
      margin: 0;
      h1 {
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .disabled {
      display: none !important;
    }
    .text-container {
      .actions {
        flex-direction: column;
      }
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
  const [loading, setLoading] = useState(false);

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
      {loading && <Loader showLoading={loading} />}

      <TokenPreSaleModal
        setShowModal={setShowModal}
        showModal={showModal}
        setLoading={setLoading}
      />
      <TokenDetailContainer
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
            className="disabled brnrocket"
            style={{
              zIndex: 9999,
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
            width="250px"
            height="10px"
            className="animate__animated animate__fadeInUp animate__delay-1s disabled"
          >
            <HTitle
              fontSize={"16px"}
              color="black"
              useTitleCase={false}
              alignItems="center"
            >
              Are you a no brainer? <img src="/commonBrainer.png" width={30} />
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
                margin="0 4em"
                gap="2em"
                className="animate__animated animate__fadeInUp text-container"
                boxShadow={
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                }
              >
                <HTitle fontSize={"50px"} color={"goldColor"}>
                  Be part of the journey
                </HTitle>
                <HTitle
                  useTitleCase={false}
                  margin={"-40px 0 0 0"}
                  fontSize={"20px"}
                >
                  $BRNR isn’t just a token — it’s a movement.
                </HTitle>
                <Paragraph useTitleCase={false}>
                  In the Brainer ecosystem, you don’t just hold — you burn, you
                  push, you fuel the mission.
                </Paragraph>
                <HBox className="actions">
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
      </TokenDetailContainer>

      <TokenAddress style={{ marginTop: "4em" }} />
      <TokenomicsSection />

      <InfoContainer id="join-whitelist">
        <SectionTitle>🔥 How to Join the Whitelist</SectionTitle>
        <ListItem useTitleCase={false}>
          1️⃣ Hold a Pixel Brainer NFT ➤ You'll automatically receive an
          exclusive airdrop of $BRNR tokens.
        </ListItem>
        <ListItem useTitleCase={false}>
          2️⃣ Participate in the Pre-Sale ➤ Contribute 0.02 ETH (max 5) through
          the Pre-Sale Button and receive $BRNR tokens equivalent to your
          contribution.
        </ListItem>
        <ListItem useTitleCase={false} style={{ display: "block" }}>
          🔥 Combine Both! ➤ Hold a Pixel Brainer NFT and join the Pre-Sale to
          unlock both benefits:
          <ul>
            <li>An airdrop of $BRNR tokens</li>
            <li>Plus the token equivalent of your Pre-Sale contribution</li>
          </ul>
        </ListItem>

        <Divider />

        <SectionTitle>🚀 Token Distribution & Liquidity Plan</SectionTitle>
        <ListItem useTitleCase={false}>
          • The Pre-Sale will offer 1 billion $BRNR tokens (10% of total
          supply). These tokens will be sold to early backers at a discounted
          price, supporting liquidity and strengthening the foundation of the
          token's value.
        </ListItem>
        <ListItem useTitleCase={false}>
          • 100% of the funds raised through the Pre-Sale will be allocated to
          enhancing liquidity for $BRNR, ensuring a solid market foundation and
          stronger price stability on both centralized and decentralized
          exchanges.
        </ListItem>
        <ListItem useTitleCase={false}>
          • A portion of the tokens from the Pre-Sale will be reserved for
          staking, enabling users to participate in governance and earn rewards
          as part of the Brainer Society ecosystem.
        </ListItem>
        <ListItem useTitleCase={false}>
          • Funds raised from NFT sales will be reinvested into the Brainer
          Society ecosystem, including further game development, strategic
          marketing, and community expansion.
        </ListItem>

        <PreSaleButton
          margin={"2em 0 0 0"}
          onClick={() => handleShowModal(true)}
          width={"100%"}
        >
          Join Pre-Sale Now 🚀
        </PreSaleButton>
        <Paragraph2
          useTitleCase={false}
          textalign={"center"}
          margin={"2em 0 0 0"}
        >
          By supporting the project early, you're not only securing your spot in
          the Brainer Society—you’re also fueling our journey to
          decentralization and innovation.
        </Paragraph2>
      </InfoContainer>

      <WhitePaperButton />
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
  background: ${({ theme }) => theme.shadeViolet || "#2c003e"};
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid gold;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  width: 80%;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const Title = styled(HTitle)`
  font-size: 32px;
  color: gold;

  @media screen and (max-width: 550px) {
    font-size: 24px !important;
  }
`;

export const Subtitle = styled(HTitle)`
  font-size: 24px;
  color: white;
`;

export const Paragraph = styled(HTitle)`
  font-size: 24px;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 550px) {
    font-size: 18px !important;
  }
`;
export const Paragraph2 = styled(HTitle)`
  font-size: 14px;
  color: #d1d1d1;
  margin: 0 auto;
  width: 80%;
  line-height: 1.5;
  text-align: center;

  @media screen and (max-width: 550px) {
    font-size: 14px !important;
  }
`;

export const SectionTitle = styled(HTitle)`
  text-align: center;
  font-size: 30px;
  width: 100%;
  color: gold;
  @media screen and (max-width: 550px) {
    font-size: 24px !important;
  }
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

  @media screen and (max-width: 550px) {
    font-size: 14px !important;
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
