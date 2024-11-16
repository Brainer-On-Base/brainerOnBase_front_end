import React from 'react';
import { StyledNFTCollectionsContainer, StyledFlexFullCenterContainer, StyledFlexCenterContainer } from '../styled-components/container';

const NFTCollections = () => {
    const type = 'Pixel Brainer Collection'

    return (
        <StyledNFTCollectionsContainer>
            <h2>BRAINER 1ST PIXEL ART NFT COLLECTION</h2>
            <div className='nft-content-container'>
                <div className='nft-description'>
                    <p className="description">Introducing the Pixel Brainers First Drop, a unique collection of NFTs designed to support the creation of Brainer Society and its bold vision for the Metaverse. 
                        These collectible Pixel Brainers are a fun, creative way to contribute to the project's success while owning a piece of its early history.
                    </p>
                    <ul>
                        <li>
                            <img src="./commonBrainer.png" alt="Bullet Point" className="bullet-icon" />
                            <p> <span>SUPPORT THE VISION: </span>Every NFT purchased helps fund the development of the Brainer Society game and ecosystem.</p>
                            </li>
                        <li>
                            <img src="./commonBrainer.png" alt="Bullet Point" className="bullet-icon" />
                            <p>
                                <span>OWN THE FIRST OF MANY: </span>
                             This collection marks the starting point of our journey—a true collector’s item for those who believe in innovation.
                            </p>
                        </li>
                        <li>
                            <img src="./commonBrainer.png" alt="Bullet Point" className="bullet-icon" />
                            <p><span>BE PART OF THE HISTORY: </span>
                            Owning a Pixel Brainer is a symbol of your support for the rise of Brainers everywhere.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='nft-examples-images'>
                    {[...Array(12)].map((_, index) => (
                        <img key={index} src="./brainerCoin.png" alt="NFT Collection" />
                    ))}
                </div>
            </div>
        </StyledNFTCollectionsContainer>
    );
}

export default NFTCollections;