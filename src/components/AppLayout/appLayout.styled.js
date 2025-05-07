import styled from "styled-components";

export const StyledAppContainer = styled("div")`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  overflow-x: hidden;

  .minted-quantity {
    font-family: "Luckiest Guy", cursive;
    margin-left: 8px;
    font-size: 40px;
    color: #888;
    text-transform: uppercase;
  }
`;

export const StyledInitAppContainer = styled(StyledAppContainer)`
  background-color: #242424 !important;
  z-index: 9999;
  height: 100vh;
  width: 100%;
`;
