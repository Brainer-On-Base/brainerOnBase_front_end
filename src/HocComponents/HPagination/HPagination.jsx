import React from "react";
import HButton from "../HButton/HButton";
import HBox from "../HBox/HBox";
import HTitle from "../HTitle/HTitle";

const HPagination = ({
  labelPage = "Pagina",
  labelOf = "de",
  setPagination,
  totalItems,
  totalPages,
  currentPage,
  showLabel = true,
  margin = "30px 0 0 20px",
}) => {
  return (
    <HBox
      justify="center"
      align="center"
      margin={margin}
      style={{ zIndex: 9999999999999 }}
    >
      <HButton
        disabled={currentPage === 1}
        onClick={() => {
          setPagination((prev) => ({
            ...prev,
            offset: prev?.offset - prev?.limit,
          }));
        }}
        padding={"5px 10px"}
        borderRadius="8px"
        fontSize={"25px"}
      >
        {"<"}
      </HButton>
      <HTitle fontWeight="bold" margin="0 10px" padding="0" as="h5">
        {showLabel ? labelPage : ""} {currentPage}
        {showLabel ? ` ${labelOf} ` : " / "} {totalPages}
      </HTitle>
      <HButton
        padding={"5px 10px"}
        fontSize={"25px"}
        disabled={currentPage === totalPages}
        onClick={() => {
          setPagination((prev) => ({
            ...prev,
            offset: prev?.offset + prev?.limit,
          }));
        }}
        borderRadius="8px"
      >
        {">"}
      </HButton>
    </HBox>
  );
};

export default HPagination;
