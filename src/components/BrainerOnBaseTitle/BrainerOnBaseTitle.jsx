import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBOBTitle } from "./bobTitle.styled";

const BrainerOnBaseTitle = ({ title, fontSize }) => {
  const navigate = useNavigate();
  return (
    <StyledBOBTitle onClick={() => navigate("/home#home")} fontSize={fontSize}>
      <h1 className={"animate__animated animate__backInDown"}>BRAINER</h1>
      <h1 className={"animate__animated animate__fadeInDown animate__delay-1s"}>
        N BASE
      </h1>
    </StyledBOBTitle>
  );
};

export default BrainerOnBaseTitle;
