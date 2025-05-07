import styled from "styled-components";

export const StyledTokenomicsSection = styled("div")`
  height: auto;
  margin-bottom: 4em;
  margin-top: 4em;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  overflow: hidden;

  h2 {
    margin: 0;
    font-size: 4em;
    width: 100%;
    font-family: "Luckiest Guy", cursive;
    font-weight: 600;
    text-align: center;
    color: white;
    margin-bottom: 1em;
  }
`;
export const StyledCard = styled("div")`
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1.8em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  transition: border-color 0.25s;
  font-family: "Luckiest Guy", cursive;
  width: 900px;
  align-self: flex-start;
  margin: 0em 0em 2em 4em;
  display: flex;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  img {
    width: 200px;
    height: 200px;
    margin: 0em 1em;
    transition: filter 300ms;
    cursor: pointer;
    &:hover {
      filter: drop-shadow(0 0 1em #c464ffaa);
    }
  }

  h2 {
    text-align: left !important;
    font-size: 1.4em !important;
    margin-bottom: 1em;
  }

  p,
  .text {
    font-size: 0.8em !important;
    font-family: monospace;
    font-size: 40px;
    line-height: 1.3em;
  }

  span {
    font-size: 20px;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }

  &:nth-of-type(2),
  &:nth-of-type(4),
  &:nth-of-type(6) {
    align-self: flex-end;
    margin: 0em 4em 2em 0em;
  }

  @media (max-width: 1200px) {
    align-self: center !important;
    margin: 1em !important;
  }

  @media (max-width: 1000px) {
    width: 80%;
    margin: 1em !important;
  }
  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`;
