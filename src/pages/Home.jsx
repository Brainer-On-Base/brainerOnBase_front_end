import React, { useEffect, useState } from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";
import AboutSection from "../components/home/AboutSection";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useModals from "../hooks/useSweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { Center, Html, View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import RoadmapSection from "../components/home/RoadmapSection";
import {
  StyledButton,
  StyledLaunchGameButton,
} from "../components/styled-components/buttons";
import NFTCollections from "../components/home/NFTCollections";
import TokenSection from "../components/home/TokenSection";

export default function Home() {
  const [showHistory, setShowHistory] = useState("/home");
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setShowHistory(
        location.hash === "#home" ? "/home" : "/home" + location.hash
      );
    }
  }, [location]);

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
      {showHistory === "/home" && <WelcomeSection />}
      {showHistory === "/home#history" && <HistorySection />}
      {showHistory === "/home#about" && <AboutSection />}
      {showHistory === "/home#roadmap" && <RoadmapSection />}
      <NFTCollections />

      <TokenSection />
      <TokenomicsSection />
      <StyledLaunchGameButton
        onClick={() => window.open("https://docs.braineronbase.com")}
      >
        WHITE PAPER
      </StyledLaunchGameButton>
      {/* <Link to="/nft-details">
        <StyledButton>
          View NFT Collection
        </StyledButton>
      </Link> */}
      {/* <TokenomicsSection/> */}
      <Footer />
    </StyledAppContainer>
  );
}
