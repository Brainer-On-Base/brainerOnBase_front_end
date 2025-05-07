import styled from "styled-components";

export const PanelWrapper = styled.div`
  background: #1e1e2f;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000aa;
  z-index: 9999;
  width: 25%;
  gap: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  justify-content: center;
  box-sizing: border-box;

  transition: "height 0.3s ease, opacity 0.3s ease";
`;
