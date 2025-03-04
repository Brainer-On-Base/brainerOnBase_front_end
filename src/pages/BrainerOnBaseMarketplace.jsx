import React from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import { HBox } from "../HocComponents";
import GenericTitle from "../components/GenericTitle/GenericTitle";

const BrainerOnBaseMarketplace = () => {
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
      <HBox direction="column" justify="flex-start" height="100vh">
        <GenericTitle
          title="Marketplace"
          // subtitle="Buy or sell your NFTs"
          // subtitleFontSize={"40px"}
        />
      </HBox>
    </StyledAppContainer>
  );
};

export default BrainerOnBaseMarketplace;
