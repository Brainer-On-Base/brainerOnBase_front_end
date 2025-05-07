import React from "react";
import { HBox, HButton, HTitle } from "../../../HocComponents";
import { NavbarHub } from "../playerHub/NavbarHub";
import styled from "styled-components";
import BubbleDialog from "../../BubbleDialog";
import { RocketContainer } from "../../../pages/TokenDetails";
import { motion } from "framer-motion";
import { FloatAnimation } from "../../NftDetails/NftDetails";
import { StyledUl } from "../../Modals/NFTMintModal";

const SocietyContainer = styled(HBox)`
  img {
    width: 200px;
    position: absolute;
    left: 50px;
    bottom: 300px;
  }

  @media screen and (max-width: 768px) {
    .text-container {
      width: 90%;
    }
    .disabled {
      display: none !important;
    }
  }
`;

const BrainerSociety = () => {
  return (
    <SocietyContainer
      width="100%"
      height="100%"
      direction="row"
      justify="flex-start"
      align="flex-start"
      style={{ zIndex: 999, minHeight: "90vh" }}
    >
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
            bottom: "-140px",
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
            top: "100px",
          }}
          width="350px"
          height="10px"
          className="animate__animated animate__fadeInUp animate__delay-1s disabled"
        >
          <HTitle
            fontSize={"16px"}
            color="black"
            useTitleCase={false}
            alignItems="center"
            display="block"
          >
            Hey, the society is under construction. In the meanwhile, you cant
            grab your Main Character to stop beign a <span>no brainer</span>.{" "}
          </HTitle>
        </BubbleDialog>
      </RocketContainer>

      <HBox direction="column" width={"100%"}>
        <FloatAnimation>
          <HBox
            width={"60%"}
            padding={"25px 40px"}
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
                  text: "The Main Character is your key to unlock your Brainer identity.",
                  icon: "./commonBrainer.png",
                },
                {
                  text: "Minting one means you're ready to join the Brainer Society as an official player.",
                  icon: "./commonBrainer.png",
                },
                {
                  text: "To mint, you must own a Pixel Brainer, hold 0.02 ETH in $BRNR, or pay 0.02 ETH directly.",
                  icon: "./commonBrainer.png",
                },
                {
                  text: "Your journey begins here. Stop being a NO BRAINER — become a Brainer now!",
                  icon: "./commonBrainer.png",
                },
              ].map((item, index) => (
                <motion.li
                  className="bullet-point"
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 }, // Aparece desde abajo
                    visible: { opacity: 1, y: 0 }, // Llega a su posición final
                  }}
                >
                  <img
                    width={20}
                    src={item.icon}
                    alt="Bullet Point"
                    className="bullet-icon"
                  />
                  <HTitle
                    width={"auto"}
                    fontSize={"16px"}
                    color="white"
                    useTitleCase={false}
                  >
                    {item.text}
                  </HTitle>
                </motion.li>
              ))}
            </StyledUl>
            <HButton disabled={true} fontSize="20px">
              Mint Brainer Character
            </HButton>
            <HTitle
              width={"100%"}
              textalign={"center"}
              color={"lightPurple"}
              fontSize={"16px"}
              useTitleCase={false}
            >
              Mint will be activated when the pre sale is over.
            </HTitle>
          </HBox>
        </FloatAnimation>
      </HBox>
    </SocietyContainer>
  );
};

export default BrainerSociety;
