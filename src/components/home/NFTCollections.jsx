import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StyledNFTCollectionsContainer } from "../styled-components/container";
import { useNavigate } from "react-router-dom";
import UseContract from "../../hooks/useContract";
import { StyledButton } from "../styled-components/buttons";

const NFTCollections = () => {
  const navigate = useNavigate();
  const [nftData, setNftData] = useState([]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { getIPFSInfo, getMintedNFTs } = UseContract();

  useEffect(() => {
    getHardCodeNFTs();
  }, []);

  const getHardCodeNFTs = () => {
    let data = [];
    for (let i = 0; i < 12; i++) {
      data.push({
        name: "NFT Name",
        description: "NFT Description",
        image: `/nftCollectionImages/${i + 1}.png`,
      });
    }
    setNftData(data);
  };

  return (
    <StyledNFTCollectionsContainer>
      <motion.img
        viewport={{ once: true, amount: 0.5 }}
        src="/spaceship.png"
        alt="Ship 3"
        style={{
          position: "absolute",
          top: "80px",
          left: "-200px",
          width: "160px",
          transform: "rotateY(180deg)",
        }}
        ro
        animate={{
          x: ["120vw", "-120vw"], // Va de izquierda a derecha
          y: [80, 400, 3000, 0], // Movimiento en onda
          rotate: [0, -10, -100, 0], // Rotación oscilante
        }}
        transition={{
          repeat: Infinity,
          duration: 14,
          ease: "easeInOut",
        }}
      />

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }} // 1s delay after entering viewport
      >
        BRAINER 1ST PIXEL ART NFT COLLECTION
      </motion.h2>

      <motion.div
        className="nft-content-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.7, delay: 0.2 }} // 1.5s delay for smoother effect
      >
        <motion.div
          className="nft-description"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.3, delay: 0.2 }} // 2s delay for description
        >
          <p className="description">
            Introducing the Pixel Brainers First Drop, a unique collection of
            NFTs designed to support the creation of Brainer Society and its
            bold vision for the Metaverse. These collectible Pixel Brainers are
            a fun, creative way to contribute to the project's success while
            owning a piece of its early history.
          </p>
          <motion.ul
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
                text: "SUPPORT THE VISION: Every NFT purchased helps fund the development of the Brainer Society game and ecosystem.",
                icon: "./commonBrainer.png",
              },
              {
                text: "OWN THE FIRST OF MANY: This collection marks the starting point of our journey—a true collector’s item for those who believe in innovation.",
                icon: "./commonBrainer.png",
              },
              {
                text: "BE PART OF THE HISTORY: Owning a Pixel Brainer is a symbol of your support for the journey of Brainers to the moon and you will receive exclusive benefits in the future.",
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
                />
                <p>
                  <span>{item.text.split(":")[0]}: </span>
                  {item.text.split(":")[1]}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="nft-examples-images"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.5, // Duración general de la animación del contenedor
              },
            },
          }}
        >
          {nftData?.map((item, index) => (
            <motion.img
              key={index}
              src={item?.image}
              alt="NFT Collection"
              whileHover={{ scale: 1.1 }}
              initial="hidden" // Aseguramos que cada hijo tenga su estado inicial
              animate="visible" // Aseguramos que cada hijo tenga su estado final
              variants={{
                hidden: { opacity: 0, y: 20 }, // Empieza oculto y desplazado
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Se hace visible
              }}
              // onClick={() => {
              //   // Extraer el ID de la URL
              //   const urlParts = item?.image.split("/");
              //   const fileName = urlParts[urlParts.length - 1].replace(
              //     ".json",
              //     ""
              //   );
              //   const id = fileName.match(/\d+/)?.[0]; // Extraer solo el número del archivo

              //   // Navegar a la nueva ruta con el ID
              //   navigate(`/nft-details/${id}`);
              // }}
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div style={{ marginTop: "-2rem", marginBottom: "3rem" }}>
        <StyledButton
          className="brainer-button"
          onClick={() => {
            navigate("/nft-list");
          }}
        >
          VIEW ALL
        </StyledButton>
      </motion.div>
    </StyledNFTCollectionsContainer>
  );
};

export default NFTCollections;
