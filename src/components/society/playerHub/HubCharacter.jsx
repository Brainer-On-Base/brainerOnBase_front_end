import React from "react";
import { HBox } from "../../../HocComponents";

const characterTemplate = {
  image:
    "https://braineronbase.com/ipfs/QmZd9RMaxg7HhQNxLmbmJFCU7AC55eZ4F44FViZYb8yrmk/2.png",
  name: "Pixel Brainer #2",
  description:
    "Own a unique Pixel Brainer from the exclusive 8,000-piece inaugural collection is a symbol of your support for the rise of Brainers everywhere.",
  external_link: "https://braineronbase.com/nft-details/2",
  attributes: [
    {
      trait_type: "Body",
      value: "Brain",
    },
    {
      trait_type: "Eyes",
      value: "Normal",
    },
    {
      trait_type: "Headgear",
      value: "King Cap",
    },
    {
      trait_type: "Mouth",
      value: "Normal",
    },
    {
      trait_type: "Accessory 1",
      value: "Amethyst Necklace",
    },
    {
      trait_type: "Accessory 2",
      value: "Empty",
    },
    {
      trait_type: "Background",
      value: "Amethyst Glow",
    },
    {
      trait_type: "Extra",
      value: "Empty",
    },
  ],
};

const HubCharacter = () => {
  return (
    <HBox
      width="100%"
      justify="center"
      align="center"
      height="100%"
      padding="20px"
    >
      <h2 style={{ color: "white" }}>Tus personaje y datos</h2>
      {/* Aquí listás los ítems que el user haya puesto en venta */}
    </HBox>
  );
};

export default HubCharacter;
