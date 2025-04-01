import React, { useEffect, useState } from "react";
import WelcomeSection from "../components/home/WelcomeSection";
import TokenomicsSection from "../components/home/TokenomicsSection";
import HistorySection from "../components/home/HistorySection";
import AboutSection from "../components/home/AboutSection";
import { useLocation, useNavigate, Link } from "react-router-dom";
import RoadmapSection from "../components/home/RoadmapSection";
import NFTCollections from "../components/home/NFTCollections";
import TokenAddress from "../components/home/TokenAddress";
import AppLayout from "../components/AppLayout/AppLayout";
import { HButton } from "../HocComponents";
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
