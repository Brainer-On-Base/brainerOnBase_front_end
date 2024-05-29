import React, { useEffect } from "react";
import { StyledAddressContainer, StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";
import { useLocation } from "react-router-dom";

export default function Home() {

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
        <p>XXXAA0000XXXXX</p>
      </StyledAddressContainer>
      <HistorySection/>
      <TokenomicsSection/>
      <Footer/>
    </StyledAppContainer>;
}
