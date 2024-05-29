import React, { useEffect } from "react";
import { StyledAddressContainer, StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";
import { useLocation } from "react-router-dom";
import useModals from "../hooks/useSweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const {copied,copyToClipboard} = useModals()

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
      <Navbar/>
      <WelcomeSection/>
      <StyledAddressContainer>
        <h3><span>$BNR</span> ADDRESS</h3>
        <p onClick={() => copyToClipboard('0x5b8BB48898b67c3481677c5Ac462786c18Db11F6')}>
          <FontAwesomeIcon icon={faCopy} style={{marginRight: '20px'}}/>
          0x5b8BB48898b67c3481677c5Ac462786c18Db11F6</p>
      </StyledAddressContainer>
      <HistorySection/>
      <TokenomicsSection/>
      <Footer/>
    </StyledAppContainer>;
}
