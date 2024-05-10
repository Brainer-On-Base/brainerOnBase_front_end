import React from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";
import Footer from "../components/Footer";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";

export default function Home() {
  return <StyledAppContainer>
      <Navbar/>
      <WelcomeSection/>
      <HistorySection/>
      <TokenomicsSection/>
      <Footer/>
    </StyledAppContainer>;
}
