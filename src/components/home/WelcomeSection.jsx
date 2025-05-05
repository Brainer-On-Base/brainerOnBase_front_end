import React, { useContext, useEffect, useState } from "react";
import { StyledWelcomeSection2 } from "../styled-components/container";
import useContractPBC1 from "../../hooks/useContractPBC1";
import Loader from "../Loader/Loader";
import { HBox, HButton } from "../../HocComponents";
import { useNavigate } from "react-router-dom";
import NFTMintModal from "../Modals/NFTMintModal";
import AccountContext from "../../provider/AccountProvider/AccountContext";
import BrainerOnBaseService from "../../service/BrainerOnBaseService";

export default function WelcomeSection() {
  const { getMintedCount } = useContractPBC1();
  const { web3provider } = useContext(AccountContext);
  const [mintedCount, setMintedCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshCount, setRefreshCount] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMintedCount();
  }, [refreshCount]);

  const fetchMintedCount = async () => {
    const count = await BrainerOnBaseService.getNFTQuantityMinted();
    setMintedCount(count.minted);
  };

  return (
    <StyledWelcomeSection2 style={{ alignItems: "flex-start" }} id="home">
      {/* <img src="rocket.png" className="baloon"/> */}
      {loading && <Loader showLoading={loading} />}
      <NFTMintModal
        showModal={showModal}
        setShowModal={setShowModal}
        setLoading={setLoading}
        setRefreshCount={setRefreshCount}
      />
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
            className={"welcome-actions"}
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
                onClick={() => setShowModal(true)}
              >
                MINT NFT
              </HButton>
              {web3provider && (
                <p className="animate__animated animate__fadeIn animate__delay-2s minted-quantity">{`${mintedCount}/5000 minted`}</p>
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
              {/* <p className="animate__animated animate__fadeIn animate__delay-2s minted-quantity">{`8000 in white list`}</p> */}
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
