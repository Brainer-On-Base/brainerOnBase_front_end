import React, { useEffect, useContext } from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import AccountContext from "../provider/AccountProvider/AccountContext";
import GenericTitle from "../components/GenericTitle/GenericTitle";
import Footer from "../components/Footer";
import { HBox } from "../HocComponents";
import AppLayout from "../components/AppLayout/AppLayout";

const BrainerOnBaseProfile = () => {
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

  return <AppLayout title="PROFILE"></AppLayout>;
};

export default BrainerOnBaseProfile;
