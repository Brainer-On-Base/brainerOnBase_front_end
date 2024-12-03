import React, { useEffect, useState } from "react";
import { StyledAddressContainer, StyledAppContainer } from "../components/styled-components/container";
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
import { StyledButton, StyledLaunchGameButton } from "../components/styled-components/buttons";
import NFTCollections from "../components/home/NFTCollections";



export default function Home() {
  const {copied,copyToClipboard} = useModals()
  const [showHistory, setShowHistory] = useState('/home');
  const navigate = useNavigate()

  const location = useLocation();


  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return <StyledAppContainer>
      <Navbar setItem={setShowHistory} item={showHistory}/>
      <View
      style={{ width: '100%', height: '100%', position: 'absolute', top: 0, bottom: 0 }}
    >
      <NightBackground/>
    </View>
    {showHistory === '/home' && <WelcomeSection/>}
      {showHistory === '/home#history' && <HistorySection/>}
      {showHistory === '/home#about' && <AboutSection/>}
      {showHistory === '/home#roadmap' && <RoadmapSection/>}
      <NFTCollections/>
      <StyledAddressContainer onClick={() => copyToClipboard('0x5b8BB48898b67c3481677c5Ac462786c18Db11F6')}>
        <h3><span>$NRN</span> ADDRESS</h3>
        <p>
          <FontAwesomeIcon icon={faCopy} style={{marginRight: '20px'}}/>
          0x5b8BB48898b67c3481677c5Ac462786c18Db11F6</p>
      </StyledAddressContainer>
      <StyledLaunchGameButton
        // onClick={() => navigate("/game")}
        // onClick={() => window.open("www.google.com")}
      >
        WHITE PAPER
      </StyledLaunchGameButton>
      {/* <Link to="/nft-details">
        <StyledButton>
          View NFT Collection
        </StyledButton>
      </Link> */}
      {/* <TokenomicsSection/> */}
      <Footer/>
    </StyledAppContainer>;
}
