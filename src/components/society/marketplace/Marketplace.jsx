import React, { useEffect, useState } from "react";
import { HBox, HButton } from "../../../HocComponents";
import MarketplaceNavbar from "./MarketplaceNavbar";
import MarketplaceFiltersBar from "./MarketplaceFiltersBar";
import MarketplaceItem from "./MarketplaceItem";

const items = [
  {
    id: 1,
    name: "Golden Throne",
    category: "Furniture & Decoration",
    price: 500,
    owner: "John Doe",
    image: "./commonBrainer.png",
  },
  {
    id: 2,
    name: "Mystic Cape",
    category: "Clothing & Accessories",
    price: 300,
    owner: "John Doe",
    image: "./commonBrainer.png",
  },
  {
    id: 3,
    name: "Cyber Dog",
    category: "Pets & Accessories",
    price: 800,
    owner: "John Doe",

    image: "./commonBrainer.png",
  },
  {
    id: 4,
    name: "Energy Drink",
    category: "Food & Drinks",
    price: 50,
    owner: "John Doe",

    image: "./commonBrainer.png",
  },
  {
    id: 5,
    name: "Teleport Crystal",
    category: "Special & Functional Items",
    price: 1000,
    owner: "John Doe",

    image: "./commonBrainer.png",
  },
  {
    id: 6,
    name: "Rare Collectible Coin",
    category: "Collectibles & Exclusives",
    price: 2000,
    owner: "John Doe",

    image: "./commonBrainer.png",
  },
  {
    id: 7,
    name: "Speed Boost",
    category: "Boosts & Power-ups",
    price: 150,
    owner: "John Doe",

    image: "./commonBrainer.png",
  },
];

const Marketplace = () => {
  const [categorySelected, setCategorySelected] = useState("All");
  const [subCategorySelected, setSubCategorySelected] = useState("All");
  const [selectViewType, setSelectViewType] = useState("grid");

  useEffect(() => {
    if (categorySelected === "All") {
      setSubCategorySelected("All");
    }
    if (categorySelected !== "All" && subCategorySelected !== "All") {
      setSubCategorySelected("All");
    }
  }, [categorySelected]);

  return (
    <HBox width="100%" align="flex-start" gap="5px" height="100%">
      <MarketplaceNavbar
        setCategorySelected={setCategorySelected}
        categorySelected={categorySelected}
        setSubCategorySelected={setSubCategorySelected}
        subCategorySelected={subCategorySelected}
      />
      <HBox
        width="80%"
        background={"shadePurpleDark"}
        borderRadius="10px"
        height="100%"
        direction="column"
        justify="center"
        align="center"
        style={{ zIndex: 999 }}
        overflowX="hidden"
        padding="20px 5px"
      >
        <MarketplaceFiltersBar
          categorySelected={categorySelected}
          subCategorySelected={subCategorySelected}
          setCategorySelected={setCategorySelected}
          setSubCategorySelected={setSubCategorySelected}
          selectViewType={selectViewType}
          setSelectViewType={setSelectViewType}
        />
        <HBox
          width="100%"
          gap="20px"
          wrap="wrap"
          justify="center"
          align="center"
        >
          {items.map((item) => (
            <MarketplaceItem
              key={item.id}
              item={item}
              selectViewType={selectViewType}
            />
          ))}
        </HBox>
      </HBox>
    </HBox>
  );
};

export default Marketplace;
