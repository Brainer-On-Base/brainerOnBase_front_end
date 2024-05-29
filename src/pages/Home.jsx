import React, { useEffect } from "react";
import { StyledAddressContainer, StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";

export default function Home() {


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
