import React from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import { HBox } from "../HocComponents";
import GenericTitle from "../components/GenericTitle/GenericTitle";
import Footer from "../components/Footer";
import Marketplace from "../components/Marketplace/Marketplace";
import UseContract from "../hooks/useContract";

const BrainerOnBaseMarketplace = () => {
  const { account, isConnected } = UseContract();

  return (
    <StyledAppContainer>
      <Navbar />
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          bottom: 0,
        }}
      >
        <NightBackground />
      </View>
      <HBox direction="column" justify="flex-start" height="auto" width="90%">
        <GenericTitle
          title="Marketplace"
          // subtitle="Buy or sell your NFTs"
          // subtitleFontSize={"40px"}
        />
        <Marketplace />
      </HBox>
      <Footer />
    </StyledAppContainer>
  );
};

export default BrainerOnBaseMarketplace;
