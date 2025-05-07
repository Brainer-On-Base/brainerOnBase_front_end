import React, { useEffect, useState } from "react";
import WelcomeSection from "../components/homeSections/welcome/WelcomeSection";
import HistorySection from "../components/homeSections/history/HistorySection";
import AboutSection from "../components/homeSections/about/AboutSection";
import { useLocation, useNavigate, Link } from "react-router-dom";
import RoadmapSection from "../components/homeSections/roadmap/RoadmapSection";
import NFTCollections from "../components/homeSections/nftCollection/NFTCollections";
import TokenomicsSection from "../components/homeSections/tokenomics/TokenomicsSection";
import TokenAddress from "../components/homeSections/TokenAddress";
import AppLayout from "../components/AppLayout/AppLayout";
import WhitePaperButton from "../components/WhitePaperButton";

export default function Home() {
  const [showHistory, setShowHistory] = useState("/home");
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <AppLayout>
      <>
        {showHistory === "/home" && <WelcomeSection />}
        {showHistory === "/home#history" && <HistorySection />}
        {showHistory === "/home#about" && <AboutSection />}
        {showHistory === "/home#roadmap" && <RoadmapSection />}
        <NFTCollections />

        <TokenAddress />
        <TokenomicsSection />
        <WhitePaperButton />
      </>
    </AppLayout>
  );
}
