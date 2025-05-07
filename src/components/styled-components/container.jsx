import { Button } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import { HBox } from "../../HocComponents";

export const StyledFlexCenterContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledFlexFullCenterContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "100%")};
`;

export const StyledFlexBetweenContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledHomeContent = styled("div")`
  text-align: center;
  font-family: "Luckiest Guy", cursive;
  margin: 0 auto;
  z-index: 99;
  .logo {
    height: 6em;
    padding: 2px;
    will-change: filter;
    transition: filter 300ms;
    padding: 2px;
    will-change: filter;
    transition: filter 300ms;
    width: 350px;
    height: 350px;

    animation: rotate 8s infinite alternate;
    border: none;

    img {
      width: 400px;
      transition: filter 300ms;
      border: none;

      z-index: 9999 !important;
    }
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #c464ffaa);
  }

  .read-the-docs {
    margin-top: 4em;
    color: #888;
  }

  h1 {
    font-size: 4em;
    margin-top: -5px;
    line-height: 1.1;
    transition: filter 300ms;
  }
`;

export const StyledHomeSection = styled("div")`
  min-height: 120vh;
  display: flex;
  padding-top: 1em;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  h1 {
    margin: 0;
    font-family: "Luckiest Guy", cursive;
    z-index: 9999;
    text-shadow: 0 0.0377358491em 0 #f8b8b8,
      0.0125786164em 0.0377358491em 0 #f8b8b8,
      0.0125786164em -0.0125786164em 0 #f8b8b8,
      -0.0125786164em 0.0125786164em 0 #f8b8b8, -0.0125786164em -0.0125786164em;
    font-size: 150px;
    color: #ff437d;
    margin: 20px;
  }

  @media (max-width: 1200px) {
    justify-content: flex-between;
    align-items: center;

    h1 {
      margin-top: 50px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      margin: 50px;
      margin-bottom: 0;
    }

    .title {
      width: 100%;
      text-align: center;
      font-size: 100px;
    }
  }
  @media (max-width: 500px) {
    .title {
      margin-top: 90px !important;
      font-size: 80px;
    }
  }
`;

export const StyledNFTDetailsContainer = styled(StyledHomeSection)`
  min-height: 100vh;
  width: 100%;
  align-items: center;

  h1 {
    line-height: 1.1;
    transition: filter 300ms;
    font-family: "Luckiest Guy", cursive;
    text-shadow: 0 0.0377358491em 0 #f8b8b8,
      0.0125786164em 0.0377358491em 0 #f8b8b8,
      0.0125786164em -0.0125786164em 0 #f8b8b8,
      -0.0125786164em 0.0125786164em 0 #f8b8b8, -0.0125786164em -0.0125786164em;
    &:nth-of-type(1) {
      margin-top: 40px;
      font-size: 90px;
      color: #ff437d;
    }
    &:nth-of-type(2) {
      margin-top: -20px;
      font-size: 80px;
      color: #888;
      color: white;
      text-shadow: none;
    }
  }

  h2 {
    margin: 0.2em 0;
    font-size: 2.5em;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }

  @media screen and (max-width: 814px) {
    h1 {
      &:nth-of-type(1) {
        font-size: 60px; /* Reduce el tamaño para pantallas pequeñas */
        margin-top: 20px; /* Ajusta el margen para que no ocupe demasiado espacio */
      }
      &:nth-of-type(2) {
        font-size: 50px; /* Reduce también el tamaño del segundo título */
        margin-top: 0 !important; /* Ajusta el margen superior */
      }
    }

    h2 {
      margin-top: 1em;
      font-size: 2em; /* Reduce un poco el tamaño del subtítulo */
    }
  }
`;

export const StyledTokenSection = styled(motion.div)`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  font-family: "Luckiest Guy", cursive;
  z-index: 999999;
  overflow: hidden;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 0.4s ease;
  background: ${({ theme }) => theme.shadeViolet || "#2c003e"};
  padding: 40px;
  width: 120%;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  h3 {
    transition: all 0.4s ease;
    font-size: 60px;
    margin: 0;
    color: white;

    @media (max-width: 900px) {
      font-size: 40px;
    }
  }

  &:hover {
    p {
      color: #ff0cdf !important;
      filter: drop-shadow(0 0 1em #ff0cdf);
    }
  }

  p {
    font-weight: bold;
    font-family: "Luckiest Guy", cursive;
    font-size: 40px;
    margin: 0;
    cursor: pointer;
    color: #888;
    transition: all 0.4s ease;
    text-align: center;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 1200px) {
      font-size: 2em;
    }

    @media (max-width: 992px) {
      font-size: 1.8em;
      width: 50%;
    }

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }
`;
