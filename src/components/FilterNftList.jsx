import React, { useState } from "react";
import styled from "styled-components";
import { HBox, HButton, HDropdown } from "../HocComponents";

const PanelWrapper = styled.div`
  background: #1e1e2f;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000aa;
  z-index: 9999;
  width: 20%;
`;

const categoryOptions = {
  eyes: [
    "",
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
    "",
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
  mouth: ["", "Normal", "Golden Teeth", "Smile", "Tongue", "Circular"],
  background: [
    "",
    "Deep Violet",
    "Royal Purple",
    "Grape",
    "Lavender Blush",
    "Midnight Violet",
    "Amethyst Glow",
  ],
  extra: [
    "",
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
  });

  const handleChange = (category, value) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
    onChangeFilters(newFilters);
  };

  return (
    <PanelWrapper>
      {Object.entries(categoryOptions).map(([category, options]) => (
        <HDropdown
          key={category}
          label={category.toUpperCase()}
          options={options}
          value={filters[category]}
          onChange={(e) => handleChange(category, e.target.value)}
          width="200px"
          margin="0.5em 0"
        />
      ))}
    </PanelWrapper>
  );
};

export default FiltersPanel;
