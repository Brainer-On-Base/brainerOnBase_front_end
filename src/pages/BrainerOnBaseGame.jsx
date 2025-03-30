import React from "react";
import {
  StyledFlexFullCenterContainer,
  StyledHomeSection,
} from "../components/styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import Navbar from "../components/Navbar/Navbar";
import UseContract from "../hooks/useContract";
import { StyledButton } from "../components/styled-components/buttons";
import Game from "../components/society/game/Game";
import SocietyMap from "../components/society/game/SocietyMap";
import GameSettings from "../components/society/game/GameSettings";
import MainMenu from "../components/society/game/MainMenu";
import AccountContext from "../provider/AccountProvider/AccountContext";

export default function BrainerOnBaseMain() {
  const { connectWallet, isConnected } = useContext(AccountContext);
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [gameNavigation, setGameNavigation] = React.useState("main");

  return (
    <StyledFlexFullCenterContainer
      style={{
        backgroundImage: "linear-gradient(to bottom, #230f44, #242424)",
        height: "100vh",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
          top: 0,
          bottom: 0,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <NightBackground />
        {isGameStarted && <Game />}
      </View>
      <Navbar />
      {isConnected && gameNavigation === "main" ? (
        <MainMenu
          setGameNavigation={setGameNavigation}
          setIsGameStarted={setIsGameStarted}
        />
      ) : isConnected && gameNavigation === "society" ? (
        <></>
      ) : isConnected && gameNavigation === "map" ? (
        <SocietyMap />
      ) : isConnected && gameNavigation === "settings" ? (
        <GameSettings />
      ) : (
        <StyledFlexFullCenterContainer
          style={{ flexDirection: "column", marginTop: "4em" }}
        >
          <img
            src="./gamingbrainer.png"
            style={{ width: "300px" }}
            className={`animate__animated animate__fadeInDown animations`}
          />
          <StyledButton
            style={{ zIndex: 2, marginTop: "2em" }}
            size={"2em"}
            onClick={connectWallet}
          >
            CONNECT WALLET
          </StyledButton>
        </StyledFlexFullCenterContainer>
      )}
    </StyledFlexFullCenterContainer>
  );
}
