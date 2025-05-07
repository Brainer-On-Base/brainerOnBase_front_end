import React from "react";
import { HDropdown } from "../../HocComponents";
import { PanelWrapper } from "./filterspanel.styled";

const categoryOptions = {
  Eyes: [
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
  Headgear: [
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
  Mouth: ["All", "Normal", "Golden Teeth", "Smile", "Tongue", "Circular"],
  Background: [
    "All",
    "Deep Violet",
    "Royal Purple",
    "Grape",
    "Lavender Blush",
    "Midnight Violet",
    "Amethyst Glow",
  ],
  Extra: [
    "All",
    "Cactus",
    "Mushrooms Shower",
    "Easter Egg",
    "Right Plant",
    "Left Plant",
  ],
  Accessory1: [
    "All",
    "Sapphire Necklace",
    "Gold Necklace",
    "Diamond Necklace",
    "Red Necklace",
    "Green Necklace",
    "Blue Necklace",
    "Purple Necklace",
    "Black Necklace",
  ],
};

const FiltersPanel = ({ setFilters, filters }) => {
  const handleChange = (category, value) => {
    const newFilters = { ...filters, [category]: value };
    setFilters(newFilters);
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
          labelColor="lightPurple"
          width="90%"
        />
      ))}
    </PanelWrapper>
  );
};

export default FiltersPanel;
