import React, { useEffect, useContext } from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import AccountContext from "../provider/AccountProvider/AccountContext";
import { HBox } from "../HocComponents";
import GenericTitle from "../components/GenericTitle/GenericTitle";
import Footer from "../components/Footer";
import Inventory from "../components/Inventory/Inventory";
import AppLayout from "../components/AppLayout/AppLayout";

const BrainerOnBaseInventory = () => {
  const { account, setAccount, web3provider, setWeb3Provider, isConnected } =
    useContext(AccountContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isConnected) navigate("/home");
  }, [isConnected]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppLayout title="INVENTORY">
      <Inventory />
    </AppLayout>
  );
};

export default BrainerOnBaseInventory;
