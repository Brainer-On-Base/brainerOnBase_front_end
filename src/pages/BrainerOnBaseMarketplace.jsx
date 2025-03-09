import React from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import { HBox, HButton } from "../HocComponents";
import GenericTitle from "../components/GenericTitle/GenericTitle";
import Footer from "../components/Footer";
import Marketplace from "../components/society/marketplace/Marketplace";
import UseContract from "../hooks/useContract";
import zIndex from "@mui/material/styles/zIndex";
import AppLayout from "../components/AppLayout/AppLayout";

const BrainerOnBaseMarketplace = () => {
  const { account, isConnected } = UseContract();

  return (
    <AppLayout title={"Marketplace"}>
      <Marketplace />
    </AppLayout>
  );
};

export default BrainerOnBaseMarketplace;
