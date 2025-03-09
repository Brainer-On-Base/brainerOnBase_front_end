import React from "react";
import { StyledAppContainer } from "../styled-components/container";
import Navbar from "../Navbar/Navbar";
import { View } from "@react-three/drei";
import NightBackground from "../NIghtBackground";
import { HBox, HButton } from "../../HocComponents";
import GenericTitle from "../GenericTitle/GenericTitle";
import Footer from "../Footer";
import UseContract from "../../hooks/useContract";
import { useLocation, useNavigate } from "react-router-dom";

const AppLayout = ({ title, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isFromSocietyLogic =
    location.pathname === "/marketplace" ||
    location.pathname === "/profile" ||
    location.pathname === "/inventory";
  const { isConnected } = UseContract();
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
      <HBox direction="column" justify="flex-start" height="auto" width="95%">
        {title && (
          <GenericTitle
            title={title}
            // subtitle="Buy or sell your NFTs"
            // subtitleFontSize={"40px"}
          />
        )}
        {isConnected && isFromSocietyLogic && (
          <HBox
            width="100%"
            align="center"
            justify="center"
            padding="5px"
            margin="-30px 0 0 0"
            overflowX="hidden"
            direction="row"
          >
            <HButton
              fontSize={"30px"}
              padding={"10px 20px"}
              style={{
                zIndex: 99999,
                border:
                  location.pathname === "/profile"
                    ? "1px solid #ff437d"
                    : "transparent",
              }}
              onClick={() => navigate("/profile")}
            >
              PROFILE
            </HButton>
            <HButton
              fontSize={"30px"}
              padding={"10px 20px"}
              style={{
                zIndex: 99999,
                border:
                  location.pathname === "/inventory"
                    ? "1px solid #ff437d"
                    : "transparent",
              }}
              onClick={() => navigate("/inventory")}
            >
              INVENTORY
            </HButton>
            <HButton
              fontSize={"30px"}
              padding={"10px 20px"}
              style={{
                zIndex: 99999,
                border:
                  location.pathname === "/marketplace"
                    ? "1px solid #ff437d"
                    : "transparent",
              }}
              onClick={() => navigate("/marketplace")}
            >
              MARKETPLACE
            </HButton>
          </HBox>
        )}
        {children}
      </HBox>
      <Footer />
    </StyledAppContainer>
  );
};

export default AppLayout;
