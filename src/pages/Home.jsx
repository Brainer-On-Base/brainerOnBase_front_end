import React, { useEffect, useState } from "react";
import { StyledAddressContainer, StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";
import AboutSection from "../components/home/AboutSection";
import { useLocation } from "react-router-dom";
import useModals from "../hooks/useSweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import RoadmapSection from "../components/home/RoadmapSection";

export default function Home() {
  const {copied,copyToClipboard} = useModals()
  const [showHistory, setShowHistory] = useState('/home');

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
      style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}
    >
      <NightBackground/>
    </View>
      {showHistory === '/home' && <WelcomeSection/>}
      {showHistory === '/home#history' && <HistorySection/>}
      {showHistory === '/home#about' && <AboutSection/>}
      {showHistory === '/home#roadmap' && <RoadmapSection/>}
      <StyledAddressContainer onClick={() => copyToClipboard('0x5b8BB48898b67c3481677c5Ac462786c18Db11F6')}>
        <h3><span>$BNR</span> ADDRESS</h3>
        <p>
          <FontAwesomeIcon icon={faCopy} style={{marginRight: '20px'}}/>
          0x5b8BB48898b67c3481677c5Ac462786c18Db11F6</p>
      </StyledAddressContainer>

      {/* <TokenomicsSection/> */}
      <Footer/>
    </StyledAppContainer>;
}
