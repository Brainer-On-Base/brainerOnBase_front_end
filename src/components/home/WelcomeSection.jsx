import React, { useEffect, useState } from "react";
import {
  StyledFlexCenterContainer,
  StyledWelcomeSection2,
} from "../styled-components/container";
import { StyledButton } from "../styled-components/buttons";
import useModals from "../../hooks/useSweetAlert";
import { APP_TEXTS } from "../../APP_TEXTS";
import { ethers } from "ethers";
import UseContract from "../../hooks/useContract";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { HBox, HButton } from "../../HocComponents";
import { useNavigate } from "react-router-dom";

export default function WelcomeSection() {
  const { showPopUp, useTextModal } = useModals();
  const { mint_BPC1_NFT, getMintedCount, web3provider } = UseContract();
  const [mintedCount, setMintedCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMintedCount();
  }, [refreshCount, getMintedCount]);

  const fetchMintedCount = async () => {
    const count = await getMintedCount();
    setMintedCount(count);
  };

  const mintNft = async () => {
    setLoading(true);
    await mint_BPC1_NFT();
    setRefreshCount(!refreshCount);
    setLoading(false);
  };

  return (
    <StyledWelcomeSection2 style={{ alignItems: "flex-start" }} id="home">
      {/* <img src="rocket.png" className="baloon"/> */}
      {loading && <Loader showLoading={loading} />}
      <div className="home-text-container">
        <div>
          <h1 className={"animate__animated animate__backInDown"}>BRAINER</h1>
          <h1
            className={
              "animate__animated animate__fadeInDown animate__delay-1s"
            }
          >
            N BASE
          </h1>
          <h1
            className={"animate__animated animate__fadeIn animate__delay-1s "}
          >
            ARE YOU A NO <span>BRAINER</span>?
          </h1>
          <HBox
            align="flex-start"
            justify="center"
            // className={"welcome-actions"}
            direction="column"
            gap="2em"
          >
            <HBox>
              <HButton
                fontSize={"2em"}
                padding={"20px 40px"}
                className={
                  "animate__animated animate__fadeIn animate__delay-2s"
                }
                onClick={() =>
                  useTextModal({
                    textButton: APP_TEXTS.HOME_MODAL_TEXT_BUTTON,
                    title: APP_TEXTS.HOME_MODAL_TITLE,
                    text: APP_TEXTS.HOME_MODAL_DESCRIPTION,
                    textColor: "white",
                    onConfirmFunction: async () => await mintNft(),
                  })
                }
              >
                MINT NFT
              </HButton>
              {web3provider && (
                <p className="animate__animated animate__fadeIn animate__delay-2s minted-quantity">{`${mintedCount}/8000 minted`}</p>
              )}
            </HBox>
            <HBox>
              <HButton
                fontSize={"2em"}
                padding={"20px 40px"}
                className={
                  "animate__animated animate__fadeIn animate__delay-2s"
                }
                onClick={() => navigate("/token-details")}
              >
                TOKEN PRE SALE
              </HButton>
              <p className="animate__animated animate__fadeIn animate__delay-2s minted-quantity">{`8000 in white list`}</p>
            </HBox>
          </HBox>

          {/* <StyledButton 
        onClick={()=>  showPopUp({text:'Liquidity pool is not available yet', icon:'warning'})}
        size={'2em'} className={'animate__animated animate__fadeIn animate__delay-2s'}>
          CHARTS
        </StyledButton> */}
        </div>
        <img src="moon.png" className="moon" />
      </div>
    </StyledWelcomeSection2>
  );
}
