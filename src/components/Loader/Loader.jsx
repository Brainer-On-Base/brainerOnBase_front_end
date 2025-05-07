import React from "react";
import { SyncLoader } from "react-spinners";
import { LoaderContainer } from "./loader.styled";

const Loader = ({ size, margin, color, showLoading, speed }) => {
  return (
    <>
      {showLoading && (
        <LoaderContainer>
          <SyncLoader
            size={size || 10}
            margin={margin || 2}
            color={color || "#ba68c8"}
            loading={showLoading}
            speed={speed || 1}
          />
        </LoaderContainer>
      )}
    </>
  );
};

export default Loader;
