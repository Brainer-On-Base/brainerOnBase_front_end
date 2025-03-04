import React from "react";
import { SyncLoader } from "react-spinners";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999999999999999999;
`;

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
