import React, { useContext, useEffect } from "react";
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
import AccountContext from "../provider/AccountProvider/AccountContext";

const BrainerOnBaseMarketplace = () => {
  const { account, isConnected } = useContext(AccountContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("marketplace");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <AppLayout title={"Marketplace"} id={"marketplace"}>
      <Marketplace />
    </AppLayout>
  );
};

export default BrainerOnBaseMarketplace;
