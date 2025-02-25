import React, { useEffect, useContext } from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import AccountContext from "../provider/AccountProvider/AccountContext";

const PlayerPage = () => {
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
    </StyledAppContainer>
  );
};

export default PlayerPage;
