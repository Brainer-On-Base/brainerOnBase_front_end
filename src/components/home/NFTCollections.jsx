import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StyledNFTCollectionsContainer } from "../styled-components/container";
import { useNavigate } from "react-router-dom";
import UseContract from "../../hooks/useContract";

const NFTCollections = () => {
  const navigate = useNavigate();
  const [nftData, setNftData] = useState([]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { getIPFSInfo } = UseContract();

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const data = [];
    const randomIds = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 50)
    ); // Generar 12 números aleatorios entre 0 y 50

    for (const id of randomIds) {
      try {
        const info = await getIPFSInfo(id); // Llamada a tu función que interactúa con IPFS
        data.push(info); // Agregar la respuesta al array
      } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
        data.push(null); // En caso de error, puedes agregar un valor nulo
      }
    }

    setNftData(data); // Actualizar el estado con los datos obtenidos
  };

  return (
    <StyledNFTCollectionsContainer>
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
                text: "BE PART OF THE HISTORY: Owning a Pixel Brainer is a symbol of your support for the rise of Brainers everywhere and you will receive exclusive benefits in the future.",
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
                staggerChildren: 0.1, // Tiempo entre animaciones de los hijos
                duration: 0.3, // Duración de cada animación
              },
            },
          }}
        >
          {nftData?.map((_, index) => (
            <motion.img
              key={index}
              src={_?.image}
              alt="NFT Collection"
              whileHover={{ scale: 1.1 }}
              variants={{
                hidden: { opacity: 0, y: 20 }, // Aparece desde abajo
                visible: { opacity: 1, y: 0 }, // Llega a su posición final
              }}
              onClick={() => {
                // Extraer el ID de la URL
                const urlParts = _?.image.split("/");
                const fileName = urlParts[urlParts.length - 1].replace(
                  ".json",
                  ""
                ); // Obtener el ID y remover ".json"
                const id = fileName.match(/\d+/)?.[0]; // Extraer solo el número del archivo

                // Navegar a la nueva ruta con el ID
                navigate(`/nft-details/${id}`);
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </StyledNFTCollectionsContainer>
  );
};

export default NFTCollections;
