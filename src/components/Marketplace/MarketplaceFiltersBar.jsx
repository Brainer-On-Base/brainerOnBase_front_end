import React from "react";
import { HBox, HPagination, HSearchInput, HTitle } from "../../HocComponents";
import { NavbarItem } from "./marketplce.styled";

const MarketplaceFiltersBar = ({ categorySelected, setCategorySelected }) => {
  return (
    <HBox
      width="100%"
      borderRadius="10px"
      height="auto"
      overflowX="auto"
      overflowY="hidden"
      gap="0"
      justify="space-between"
      align="flex-start"
    >
      <HSearchInput />
      <HPagination margin="0" />
    </HBox>
  );
};

export default MarketplaceFiltersBar;
