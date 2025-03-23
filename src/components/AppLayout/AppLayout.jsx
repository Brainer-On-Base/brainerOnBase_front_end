import React from "react";
import { StyledAppContainer } from "../styled-components/container";
import Navbar from "../Navbar/Navbar";
import { View } from "@react-three/drei";
import NightBackground from "../NIghtBackground";
import { HBox } from "../../HocComponents";
import GenericTitle from "../GenericTitle/GenericTitle";
import Footer from "../Footer";
import CoinRain from "../CoinRain";

const AppLayout = ({ title, subtitle, children, id, useCoinRain }) => {
  return (
    <StyledAppContainer id={id}>
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
        {useCoinRain && <CoinRain />}
      </View>
      <HBox direction="column" justify="flex-start" height="auto" width="95%">
        {title && (
          <GenericTitle
            title={title}
            subtitle={subtitle}
            // subtitle="Buy or sell your NFTs"
            // subtitleFontSize={"40px"}
          />
        )}

        {children}
      </HBox>
      <Footer />
    </StyledAppContainer>
  );
};

export default AppLayout;
