import React from "react";
import { NFTCardContainer, TraitTag, TraitContainer } from "./NftCard.styled";

const NFTCard = ({ nftSelected, backgroundColor }) => {
  return (
    <NFTCardContainer background={backgroundColor}>
      <div className="card-container">
        <h2>{nftSelected?.name}</h2>
        <img
          src={nftSelected?.image}
          alt="NFT image"
          style={{ zIndex: 99999 }}
        />
        <TraitContainer>
          {nftSelected?.attributes.map((attr, index) => (
            <TraitTag key={index}>
              <p>
                <strong>{attr.trait_type}:</strong> {attr.value}
              </p>
            </TraitTag>
          ))}
        </TraitContainer>
      </div>
    </NFTCardContainer>
  );
};

export default NFTCard;
