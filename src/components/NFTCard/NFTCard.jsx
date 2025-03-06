import React from "react";
import { NFTCardContainer, TraitTag, TraitContainer } from "./NftCard.styled";
import { HTitle } from "../../HocComponents";

const NFTCard = ({ nftSelected, backgroundColor, width, height, imgWidth }) => {
  return (
    <NFTCardContainer
      background={backgroundColor}
      width={width}
      height={height}
      imgWidth={imgWidth}
    >
      <div className="card-container">
        <HTitle fontSize={"26px"} color={"goldColor"}>
          {nftSelected?.name}
        </HTitle>
        <img
          src={nftSelected?.image}
          alt="NFT image"
          style={{ zIndex: 99999 }}
        />
        <TraitContainer>
          {nftSelected?.attributes?.map((attr, index) => (
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
