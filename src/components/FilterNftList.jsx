import React, { useState } from "react";
import styled from "styled-components";
import { HBox, HButton, HDropdown } from "../HocComponents";

const PanelWrapper = styled.div`
  background: #1e1e2f;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000aa;
  z-index: 9999;
  width: 25%;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  justify-content: center;
  box-sizing: border-box;

  transition: "height 0.3s ease, opacity 0.3s ease";
`;

const categoryOptions = {
  eyes: [
    "All",
    "Normal",
    "Angry",
    "Thunder",
    "Opium",
    "Sunglasses",
    "Dark",
    "Yellow",
    "Red Sunglasses",
    "Black Sunglasses",
    "3D Glasses",
    "Rectangular Glasses",
    "Round Glasses",
    "Square Glasses",
  ],
  hat: [
    "All",
    "Evil Horns",
    "Violet Hat",
    "Yellow Hat",
    "Red Hat",
    "Blue Hat",
    "Black Hat",
    "Russian Cap",
    "Deer Horns",
    "Headset",
    "McDonald Hat",
    "Red Wool Cap",
    "Blue Wool Cap",
    "King Cap",
    "Viking Helm",
    "Bitcoin Cowboy Hat",
    "Mexican Hat",
    "Blue Hat Flower",
    "Red Hat Flower",
    "Green Hat Flower",
    "Wizard Hat",
    "Magician Hat",
    "Constructor Helmet",
    "Angel Halo",
    "Pirate Hat",
    "Idea",
    "One Piece Hat",
    "Galley Hat",
    "Saint Patrick Hat",
    "Chef Hat",
  ],
  mouth: ["All", "Normal", "Golden Teeth", "Smile", "Tongue", "Circular"],
  background: [
    "All",
    "Deep Violet",
    "Royal Purple",
    "Grape",
    "Lavender Blush",
    "Midnight Violet",
    "Amethyst Glow",
  ],
  extra: [
    "All",
    "Cactus",
    "Mushrooms Shower",
    "Easter Egg",
    "Right Plant",
    "Left Plant",
  ],
};

const FiltersPanel = ({ onChangeFilters }) => {
  const [filters, setFilters] = useState({
    eyes: "",
    hat: "",
    mouth: "",
    background: "",
    extra: "",
    onlyMintedView: false,
  });

  const handleChange = (category, value) => {
    const newFilters = { ...filters, [category]: value };
    console.log("New filters:", newFilters);
    setFilters(newFilters);
    onChangeFilters(newFilters);
  };

  return (
    <PanelWrapper>
      <HButton
        style={{ zIndex: 999 }}
        title="Toggle View"
        fontSize={"1.5em"}
        padding={"0.9em 1.2em"}
        onClick={() => handleChange("onlyMintedView", !filters.onlyMintedView)}
      >
        {!filters.onlyMintedView ? "ONLY MINTED" : "ALL"}
      </HButton>

      {Object.entries(categoryOptions).map(([category, options]) => (
        <HDropdown
          key={category}
          label={category.toUpperCase()}
          options={options}
          value={filters[category]}
          onChange={(e) => handleChange(category, e.target.value)}
          width="90%"
        />
      ))}
    </PanelWrapper>
  );
};

export default FiltersPanel;
