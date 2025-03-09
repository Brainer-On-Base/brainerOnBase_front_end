import React from "react";
import { HBox } from "../../../HocComponents";
import {
  NavbarContainer,
  NavbarItem,
  NavbarSubItem,
} from "./marketplce.styled";

const CATEGORIES = [
  "Furniture & Decoration",
  "Clothing & Accessories",
  "Human Pets",
  "Food & Drinks",
  "Special Items",
  "Collectibles & Exclusives",
  "Boosts & Power-ups",
  "Pixel Brainer NFTs",
  "All",
];

const CATEGORIES_OPTIONS = {
  "Furniture & Decoration": [
    "Chairs",
    "Sofas",
    "Tables",
    "Beds",
    "Wardrobes and Shelves",
    "Rugs",
    "Paintings and Posters",
    "Lamps and Lighting",
    "Plants and Gardening",
    "Wallpapers",
    "Floors",
  ],
  "Clothing & Accessories": [
    "Headwear",
    "Shirts and Jackets",
    "Pants and Skirts",
    "Shoes and Boots",
    "Accessories",
    "Themed Outfits",
  ],
  "Human Pets": ["Pets", "Clothing", "Toys", "Beds and Houses", "Food"],
  "Food & Drinks": ["Snacks", "Beverages", "Prepared Dishes", "Ingredients"],
  "Special Items": [
    "Interactive Objects (e.g., TVs, computers, minigames)",
    "Emotes and Animations",
    "Musical Instruments",
    "Vehicles",
  ],
  "Collectibles & Exclusives": [
    "Seasonal Items",
    "Limited Edition NFTs",
    "Special Item Sets",
    "Trophies and Achievements",
  ],
  "Boosts & Power-ups": [
    "Experience Bonuses",
    "Construction or Growth Accelerators",
    "Energy Items",
  ],
  "Pixel Brainer NFTs": [
    "Common",
    "Uncommon",
    "Rare",
    "Epic",
    "Legendary",
    "Mythical",
    "Unique",
  ],
  All: [],
};

const MarketplaceNavbar = ({
  setCategorySelected,
  categorySelected,
  setSubCategorySelected,
  subCategorySelected,
}) => {
  return (
    <HBox
      background={"shadePurpleDark"}
      direction="column"
      borderRadius="0.5em"
      width="20%"
      height="100%"
      gap="0"
      overflowX="hidden"
      style={{ zIndex: 999, flexGrow: 1 }}
    >
      {CATEGORIES.map((category) => (
        <NavbarContainer
          key={category}
          width={"100%"}
          direction="column"
          selected={categorySelected === category}
          gap="0"
        >
          <NavbarItem
            width={"100%"}
            padding={"10px 10px 5px 20px"}
            fontSize="22px"
            fontWeight="bold"
            textAlign={"left"}
            useTitleCase={true}
            selected={categorySelected === category}
            onClick={() => setCategorySelected(category)}
          >
            {category}
          </NavbarItem>
          {categorySelected === category &&
            CATEGORIES_OPTIONS[category].map((subCategory) => (
              <NavbarSubItem
                key={subCategory}
                width={"100%"}
                padding={"2px 0 2px 60px"}
                fontSize="18px"
                fontWeight="normal"
                textAlign={"left"}
                selected={subCategorySelected === subCategory}
                onClick={() => setSubCategorySelected(subCategory)}
                useTitleCase={false}
              >
                {subCategory}
              </NavbarSubItem>
            ))}
        </NavbarContainer>
      ))}
    </HBox>
  );
};

export default MarketplaceNavbar;
