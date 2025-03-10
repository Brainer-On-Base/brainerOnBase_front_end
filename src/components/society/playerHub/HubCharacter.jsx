import React from "react";
import styled from "styled-components";
import { HBox, HButton } from "../../../HocComponents";

const characterTemplate = {
  image:
    "https://braineronbase.com/ipfs/QmZd9RMaxg7HhQNxLmbmJFCU7AC55eZ4F44FViZYb8yrmk/2.png",
  name: "Robter Brainer",
  description:
    "Own a unique Pixel Brainer from the exclusive 8,000-piece inaugural collection is a symbol of your support for the rise of Brainers everywhere.",
  external_link: "https://braineronbase.com/nft-details/2",
  attributes: [
    {
      trait_type: "Body",
      value: "Brain",
    },
    {
      trait_type: "Eyes",
      value: "Normal",
    },
    {
      trait_type: "Headgear",
      value: "King Cap",
    },
    {
      trait_type: "Mouth",
      value: "Normal",
    },
    {
      trait_type: "Accessory 1",
      value: "Amethyst Necklace",
    },
    {
      trait_type: "Accessory 2",
      value: "Empty",
    },
    {
      trait_type: "Background",
      value: "Amethyst Glow",
    },
    {
      trait_type: "Extra",
      value: "Empty",
    },
  ],
};

const HubCharacter = () => {
  return (
    <HBox
      width="100%"
      justify="center"
      align="flex-start"
      height="100%"
      padding="20px"
    >
      <CardContainer>
        <CharacterImage
          src={characterTemplate.image}
          alt={characterTemplate.name}
        />
      </CardContainer>
      <HBox width="100%" direction="column" align="flex-start" padding="20px">
        <CharacterName>Username: {characterTemplate.name}</CharacterName>
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
                  Intercambiar
                </ActionButton>
                <RemoveButton
                  onClick={() => console.log(`Remove ${attr.trait_type}`)}
                >
                  Quitar
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

// Styled Components
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
