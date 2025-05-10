import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { HBox, HButton, HTitle } from "../../../HocComponents";
import { FiRefreshCcw } from "react-icons/fi";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { TbAd } from "react-icons/tb";
import Web3Context from "../../../provider/Web3Provider/Web3Context";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Datos del personaje
const characterTemplate = {
  image:
    "https://braineronbase.com/ipfs/QmZd9RMaxg7HhQNxLmbmJFCU7AC55eZ4F44FViZYb8yrmk/2.png",
  name: "Robter Brainer",
  description:
    "A unique Brainer, ready for new adventures in the Brainer Society.",
  external_link: "https://braineronbase.com/nft-details/2",
  attributes: [
    { trait_type: "Body", value: "Brain" },
    { trait_type: "Eyes", value: "Normal" },
    { trait_type: "Headgear", value: "King Cap" },
    { trait_type: "Mouth", value: "Normal" },
    { trait_type: "Accessory 1", value: "Amethyst Necklace" },
    { trait_type: "Accessory 2", value: "Empty" },
    { trait_type: "Background", value: "Amethyst Glow" },
    { trait_type: "Extra", value: "Empty" },
  ],
};

const HubCharacter = () => {
  const {
    stats,
    equippedItems,
    username,
    wallet,
    level,
    experience,
    experienceToNextLevel,
    mainCharacterNFT,
  } = useSelector((state) => state.user);
  const [xpProgress, setXPProgress] = useState(0);
  const [characterRarity, setCharacterRarity] = useState("Common");

  //Calculate experience progress
  useEffect(() => {
    const calculateXPProgress = () => {
      const progress = (experience / experienceToNextLevel) * 100;
      setXPProgress(progress);
    };

    calculateXPProgress();
  }, [experience, experienceToNextLevel]);

  // Calculate rarity based on equipped items
  useEffect(() => {
    const calculateRarity = () => {
      const rarityValues = {
        Common: 0,
        Rare: 0,
        Epic: 0,
        Legendary: 0,
      };

      Object.values(equippedItems).forEach((item) => {
        const rarity = item?.rarity || "Common";
        rarityValues[rarity] += 1;
      });

      const maxRarity = Object.keys(rarityValues).reduce((a, b) =>
        rarityValues[a] > rarityValues[b] ? a : b
      );

      setCharacterRarity(maxRarity);
    };

    calculateRarity();
  }, [equippedItems]);

  return (
    <HBox
      width="100%"
      justify="center"
      align="flex-start"
      height="100%"
      padding="20px"
    >
      {/* Card Personaje */}
      <CardContainer>
        <CharacterImage
          src={mainCharacterNFT ?? "/nftCollectionImages/unknown.png"}
          alt={mainCharacterNFT ?? "Unrevealed Brainer"}
        />

        <HBox width="120%" direction="column" align="flex-start">
          <CharacterStat>Level {mainCharacterNFT ? level : 0}</CharacterStat>

          <HBox direction="column" align="flex-start" width="100%" gap="0">
            <XPBar>
              <XPFill style={{ width: `${xpProgress}%` }} />
            </XPBar>

            <XPText>
              {experience} / {experienceToNextLevel} XP
            </XPText>
          </HBox>

          <HBox width="100%" justify="flex-start" align="center">
            <HTitle fontSize={"24px"}>Rarity:</HTitle>
            <RarityTag rarity={characterRarity}>{characterRarity}</RarityTag>
          </HBox>

          <ActionButton onClick={() => console.log("Train Character")}>
            Train
          </ActionButton>

          <ExternalLink
            href={mainCharacterNFT ? mainCharacterNFT : "/society"}
            target={mainCharacterNFT ? "_blank" : "_self"}
          >
            {mainCharacterNFT
              ? "View on Brainer Base"
              : "Main Character unrevealed"}
          </ExternalLink>
        </HBox>
      </CardContainer>

      {/* Info Extra del Personaje */}
      <HBox width="100%" direction="column" align="flex-start" padding="20px">
        <CharacterName>
          Username: {mainCharacterNFT ? name : "Unrevealed Brainer"}
        </CharacterName>

        <Description>{characterTemplate.description}</Description>

        <TraitsContainer>
          {characterTemplate.attributes.map((attr, index) => (
            <TraitCard key={index}>
              <TraitInfo>
                <strong>{attr.trait_type}</strong>: {attr.value}
              </TraitInfo>
              <ButtonsContainer>
                <ActionButton
                  onClick={() => console.log(`Swap ${attr.trait_type}`)}
                >
                  {attr.value === "Empty" ? (
                    <FaPlus style={{ marginRight: "8px" }} />
                  ) : (
                    <FiRefreshCcw style={{ marginRight: "8px" }} />
                  )}
                  {attr.value === "Empty" ? "Add" : "Change"}
                </ActionButton>
                <RemoveButton
                  disabled={attr.value === "Empty"}
                  onClick={() => console.log(`Remove ${attr.trait_type}`)}
                >
                  <FaRegTrashAlt style={{ marginRight: "8px" }} />
                  Remove
                </RemoveButton>
              </ButtonsContainer>
            </TraitCard>
          ))}
        </TraitsContainer>
      </HBox>
    </HBox>
  );
};

export default HubCharacter;

////////////////////////////////////
// Styled Components
////////////////////////////////////

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  background: linear-gradient(145deg, #2a0845, #6441a5);
  padding: 20px 50px;
  color: #ffffff;
  overflow: hidden;
  z-index: 9999999;
  width: auto;
  height: auto;
`;

const CharacterImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const CharacterName = styled.h2`
  font-size: 2em;
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  text-align: left;
  font-size: 1.2em;
  margin-bottom: 20px;
  padding: 0 10px;
`;

const TraitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  overflow-y: auto;
`;

const TraitCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TraitInfo = styled.div`
  font-size: 1.2em;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled(HButton)`
  padding: 5px 10px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.8em;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  font-size: 20px;
`;

const RemoveButton = styled(ActionButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

// NUEVOS COMPONENTES (RESPETANDO TU ESTILO)

const CharacterStat = styled.div`
  margin-top: 15px;
  font-size: 1.4em;
  font-weight: bold;
  color: #ffffff;
`;

const XPBar = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  overflow: hidden;
`;

const XPFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #00ffcc, #00b3ff);
  transition: width 0.3s ease;
`;

const XPText = styled.div`
  margin-top: 5px;
  font-size: 1em;
  color: #ffffff;
`;

const RarityTag = styled.div`
  padding: 5px 15px;
  border-radius: 8px;
  font-size: 0.9em;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => {
    switch (props.rarity) {
      case "Common":
        return "#bdc3c7";
      case "Rare":
        return "#3498db";
      case "Epic":
        return "#9b59b6";
      case "Legendary":
        return "#f39c12";
      default:
        return "#7f8c8d";
    }
  }};
`;

const ExternalLink = styled.a`
  margin-top: 15px;
  color: #ffffff;
  font-size: 0.9em;
  text-decoration: underline;

  &:hover {
    color: #00ffcc;
  }
`;
