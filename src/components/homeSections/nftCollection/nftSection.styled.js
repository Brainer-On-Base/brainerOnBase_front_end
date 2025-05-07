import styled from "styled-components";
import { StyledFlexFullCenterContainer } from "../../styled-components/container";
import { motion } from "framer-motion";
export const StyledNFTCollectionsContainer = styled(
  StyledFlexFullCenterContainer
)`
  position: relative;
  flex-direction: column;
  background-color: transparent;
  flex-grow: 1;

  h2 {
    margin: 0;
    font-size: 4em;
    width: 50%;
    font-family: "Luckiest Guy", cursive;
    font-weight: 600;
    text-align: center;
    color: white;
  }

  @media (max-width: 1400px) {
    h2 {
      width: 100%;
      font-size: 2.5em;
    }
    .nft-content-container {
      flex-direction: column;
      align-items: center;

      .nft-description {
        width: 90%;
        text-align: left;
        padding: 0;
      }

      .nft-examples-images {
        padding: 0;
        width: 90%;
        gap: 1em 2em;
        align-items: center;
        align-content: center;
        justify-content: center;
        margin-bottom: 2em;

        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;

        img {
          width: 100%;
          height: auto;
          aspect-ratio: 1/1;
          object-fit: cover;
          border-radius: 8px;
        }
      }
    }
  }

  @media (max-width: 450px) {
    .description {
      display: none;
    }
    .nft-examples-images {
      gap: 1em !important;
    }
    p,
    li {
      font-size: 15px !important;
      span {
        font-size: 15px !important;
      }
    }
  }
`;

export const StyledNFTContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const StyledNFTDescription = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em 4em 4em;

  p,
  li {
    font-size: 20px;
    font-weight: 100;
    font-weight: 600;
    color: #aaa;

    span {
      color: #ff437d;
      font-weight: 600;
      font-family: "Luckiest Guy", cursive;
      font-size: 20px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 2em;

    li {
      margin-bottom: 1em;
      display: flex;
      align-items: center;

      .bullet-icon {
        width: 50px;
        height: 50px;
        margin-right: 1em;
      }
    }
  }
`;

export const StyledNFTExamplesImages = styled("div")`
  padding: 4em;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1em;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      filter: drop-shadow(0 0 1em #c464ffaa);
    }
  }
`;
