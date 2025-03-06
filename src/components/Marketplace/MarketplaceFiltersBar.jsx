import React from "react";
import {
  HBox,
  HButton,
  HPagination,
  HSearchInput,
  HTitle,
} from "../../HocComponents";
import { NavbarItem } from "./marketplce.styled";
import { TbFilter, TbList, TbX } from "react-icons/tb";
import { MdOutlineGridView } from "react-icons/md";

const MarketplaceFiltersBar = ({
  categorySelected,
  setCategorySelected,
  subCategorySelected,
  setSubCategorySelected,
  setSelectViewType,
  selectViewType,
}) => {
  return (
    <HBox
      width="100%"
      borderRadius="10px"
      height="auto"
      overflowX="auto"
      overflowY="hidden"
      gap="0"
      align="flex-start"
      direction="column"
    >
      <HBox width="100%" justify="space-between">
        <HSearchInput />

        <HBox>
          <HPagination margin="0" />
          <HBox style={{ zIndex: 9999 }}>
            {selectViewType === "list" ? (
              <HButton
                margin="0 10px 0 0"
                padding="5px"
                onClick={() => setSelectViewType("grid")}
              >
                <TbList size={30} />
              </HButton>
            ) : (
              <HButton
                margin="0 10px 0 0"
                padding="5px"
                onClick={() => setSelectViewType("list")}
              >
                <MdOutlineGridView size={30} />
              </HButton>
            )}
          </HBox>
        </HBox>
      </HBox>

      {/* FILTERS */}

      <HBox width="100%" gap="10px" margin="20px 0 0 0" justify="flex-start">
        {categorySelected !== "All" && (
          <>
            <TbFilter size={30} />
            <HTitle fontSize={"18px"} height={"auto"} useTitleCase={true}>
              Filters:
            </HTitle>
          </>
        )}
      </HBox>

      <HBox width="100%" gap="10px" margin="20px 0 0 0" justify="flex-start">
        {categorySelected !== "All" && (
          <>
            <HBox
              background={"purpleLight"}
              boxShadow="0 0 10px rgba(0,0,0,0.2)"
              padding="10px"
              borderRadius="10px"
              justify="space-between"
              width="auto"
            >
              <HTitle fontSize={"14px"} useTitleCase={false}>
                {categorySelected}
              </HTitle>
              <HButton
                onClick={() => setCategorySelected("All")}
                margin={"0 0 0 20px"}
                width={"auto"}
                padding={"5px"}
              >
                <TbX size={20} />
              </HButton>
            </HBox>
            {subCategorySelected !== "All" && (
              <HBox
                background={"purpleLight"}
                boxShadow="0 0 10px rgba(0,0,0,0.2)"
                padding="10px"
                borderRadius="10px"
                justify="space-between"
                width="auto"
              >
                <HTitle fontSize={"14px"} useTitleCase={false}>
                  {subCategorySelected}
                </HTitle>
                <HButton
                  onClick={() => setSubCategorySelected("All")}
                  margin={"0 0 0 20px"}
                  width={"auto"}
                  padding={"5px"}
                >
                  <TbX size={20} />
                </HButton>
              </HBox>
            )}
          </>
        )}
      </HBox>
    </HBox>
  );
};

export default MarketplaceFiltersBar;
