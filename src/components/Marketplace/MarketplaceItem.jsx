import React from "react";
import { HBox, HTitle, HButton } from "../../HocComponents";

const MarketplaceItem = ({ selectViewType, item }) => {
  return (
    <HBox
      key={item.id}
      direction={selectViewType === "grid" ? "column" : "row"}
      align="center"
      padding="30px"
      borderRadius="15px"
      gap="15px"
      background={"shadeViolet"}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s"
      justify="flex-start"
      hoverTransform="scale(1.05)"
      width={selectViewType === "grid" ? "250px" : "100%"}
      height={selectViewType === "grid" ? "400px" : "50px"}
    >
      <HBox
        boxShadow={"0 4px 8px rgba(0, 0, 0, 0.1)"}
        borderRadius="10px"
        width="100%"
        height="200px"
        overflow="hidden"
        direction="column"
        padding="20px"
      >
        <HTitle
          fontSize="24px"
          fontWeight="bold"
          color={"goldColor"}
          textAlign={"center"}
        >
          {item.name}
        </HTitle>
        <img
          src={item.image}
          alt={item.name}
          style={{
            borderRadius: "10px",
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </HBox>
      <HBox direction="column" gap="10px" align="flex-start" width="100%">
        <HTitle fontSize="18px">Category:</HTitle>
        <HTitle margin={"-10px 0 0 0"} fontSize="14px" useTitleCase={false}>
          {item.category} {item.subCategory ? ` - ${item.subCategory}` : ""}
        </HTitle>
      </HBox>
      <HBox
        direction="row"
        gap="10px"
        align="flex-start"
        justify="flex-start"
        width="100%"
      >
        <HTitle fontSize="18px">Price:</HTitle>
        <HTitle fontSize="18px" color="gold">
          ${item.price}
        </HTitle>
      </HBox>
      <HBox>
        <HButton onClick={() => selectViewType(item.id)}>Comprar</HButton>
        <HButton onClick={() => selectViewType(item.id)}>Details</HButton>
      </HBox>
    </HBox>
  );
};

export default MarketplaceItem;
