import React, { useEffect, useState } from "react";
import { HBox } from "../../HocComponents";
import MarketplaceNavbar from "./MarketplaceNavbar";
import MarketplaceFiltersBar from "./MarketplaceFiltersBar";

const items = [
  {
    id: 1,
    name: "Golden Throne",
    category: "Furniture & Decoration",
    price: 500,
    image: "placeholder.jpg",
  },
  {
    id: 2,
    name: "Mystic Cape",
    category: "Clothing & Accessories",
    price: 300,
    image: "placeholder.jpg",
  },
  {
    id: 3,
    name: "Cyber Dog",
    category: "Pets & Accessories",
    price: 800,
    image: "placeholder.jpg",
  },
  {
    id: 4,
    name: "Energy Drink",
    category: "Food & Drinks",
    price: 50,
    image: "placeholder.jpg",
  },
  {
    id: 5,
    name: "Teleport Crystal",
    category: "Special & Functional Items",
    price: 1000,
    image: "placeholder.jpg",
  },
  {
    id: 6,
    name: "Rare Collectible Coin",
    category: "Collectibles & Exclusives",
    price: 2000,
    image: "placeholder.jpg",
  },
  {
    id: 7,
    name: "Speed Boost",
    category: "Boosts & Power-ups",
    price: 150,
    image: "placeholder.jpg",
  },
];

const Marketplace = () => {
  const [categorySelected, setCategorySelected] = useState("All");
  const [subCategorySelected, setSubCategorySelected] = useState("All");

  useEffect(() => {
    if (categorySelected === "All") {
      setSubCategorySelected("All");
    }
  }, [categorySelected]);

  return (
    <HBox width="100%" align="flex-start">
      <MarketplaceNavbar
        setCategorySelected={setCategorySelected}
        categorySelected={categorySelected}
        setSubCategorySelected={setSubCategorySelected}
        subCategorySelected={subCategorySelected}
      />
      <HBox
        width="75%"
        background={"shadePurpleDark"}
        padding="20px"
        borderRadius="10px"
        height="100%"
        direction="column"
        style={{ zIndex: 999 }}
      >
        <MarketplaceFiltersBar
          categorySelected={categorySelected}
          subCategorySelected={subCategorySelected}
          setCategorySelected={setCategorySelected}
          setSubCategorySelected={setSubCategorySelected}
        />
        {items.map((item) => (
          <HBox
            key={item.id}
            direction="column"
            align="center"
            padding="10px"
            borderRadius="10px"
            gap="10px"
          >
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
          </HBox>
        ))}
      </HBox>
    </HBox>
  );
};

export default Marketplace;
