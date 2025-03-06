import React from "react";
import { HBox, HTitle, HButton } from "../../HocComponents";

const MarketplaceItem = ({ selectViewType, item }) => {
  return (
    <HBox
      key={item.id}
      direction={selectViewType === "grid" ? "column" : "row"}
      align="center"
      padding="20px"
      borderRadius="15px"
      gap="15px"
      background={"shadePurpleLight"}
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      transition="transform 0.2s"
      hoverTransform="scale(1.05)"
      width={selectViewType === "grid" ? "200px" : "100%"}
      height={selectViewType === "grid" ? "300px" : "50px"}
    >
      <HBox>
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
      <HTitle fontSize="24px" fontWeight="bold">
        {item.name}
      </HTitle>
      <HTitle fontSize="18px" color="gray">
        {item.category} {item.subCategory ? ` - ${item.subCategory}` : ""}
      </HTitle>
      <HTitle fontSize="20px" color="gold">
        ${item.price}
      </HTitle>
      <HButton onClick={() => selectViewType(item.id)}>View Details</HButton>
    </HBox>
  );
};

export default MarketplaceItem;
