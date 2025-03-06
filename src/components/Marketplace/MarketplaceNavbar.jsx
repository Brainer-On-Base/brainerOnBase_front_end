import React from "react";
import { HBox, HTitle } from "../../HocComponents";
import { CategoryItem, NavbarItem, SubCategoryItem } from "./marketplce.styled";

const CATEGORIES = [
  "Furniture & Decoration",
  "Clothing & Accessories",
  "Human Pets",
  "Food & Drinks",
  "Special Items",
  "Collectibles & Exclusives",
  "Boosts & Power-ups",
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
      width="25%"
      height="100%"
      gap="0"
      overflowX="hidden"
      style={{ zIndex: 999 }}
    >
      {CATEGORIES.map((category) => (
        <NavbarItem
          key={category}
          width={"100%"}
          direction="column"
          selected={categorySelected === category}
          padding={"0 0 0 40px"}
        >
          <CategoryItem
            selected={categorySelected === category}
            width={"100%"}
            padding="10px"
            fontSize="22px"
            fontWeight="bold"
            textAlign={"left"}
            onClick={() => setCategorySelected(category)}
          >
            {category}
          </CategoryItem>
          {categorySelected === category &&
            CATEGORIES_OPTIONS[category].map((subCategory) => (
              <SubCategoryItem
                key={subCategory}
                width={"100%"}
                fontSize="18px"
                fontWeight="bold"
                textAlign={"left"}
                selected={subCategorySelected === subCategory}
                onClick={() => setSubCategorySelected(subCategory)}
              >
                {subCategory}
              </SubCategoryItem>
            ))}
        </NavbarItem>
      ))}
    </HBox>
  );
};

export default MarketplaceNavbar;
