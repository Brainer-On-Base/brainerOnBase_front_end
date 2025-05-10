import React from "react";
import { HBox } from "../../../HocComponents";
import { NavbarContainer, NavbarSubItem } from "./marketplce.styled";
import { SidebarButton } from "../playerHub/NavbarHub";

const CATEGORIES = [
  "All",
  "Furniture & Decoration",
  "Clothing & Accessories",
  "Human Pets",
  "Food & Drinks",
  "Special Items",
  "Collectibles & Exclusives",
  "Boosts & Power-ups",
  "Pixel Brainer NFTs",
];

const CATEGORIES_OPTIONS = {
  All: [],

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
      width="20%"
      height="100%"
      style={{ minHeight: "70vh", zIndex: 9999 }}
      borderRadius="10px"
      justify="flex-start"
      padding="20px 10px"
    >
      {CATEGORIES.map((category) => (
        <NavbarContainer
          key={category}
          width={"100%"}
          direction="column"
          selected={categorySelected === category}
          gap="15px"
          borderRadius="10px"
        >
          <SidebarButton
            width={"100%"}
            useTitleCase={true}
            $active={categorySelected === category}
            onClick={() => {
              if (categorySelected === category) {
                setCategorySelected("All");
              } else {
                setCategorySelected(category);
              }
            }}
          >
            {category}
          </SidebarButton>
          {categorySelected === category &&
            CATEGORIES_OPTIONS[category].map((subCategory) => (
              <NavbarSubItem
                key={subCategory}
                width={"100%"}
                padding={"2px 0 2px 40px"}
                fontSize="18px"
                fontWeight="normal"
                textAlign={"left"}
                selected={subCategorySelected === subCategory}
                onClick={() => {
                  if (subCategorySelected === subCategory) {
                    setSubCategorySelected("All");
                  } else {
                    setSubCategorySelected(subCategory);
                  }
                }}
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
