import React from "react";
import { StyledAppContainer } from "../components/styled-components/container";
import Navbar from "../components/Navbar";
import WelcomeSection from "../components/home/WelcomeSection";

export default function Home() {
  return <StyledAppContainer>
      <Navbar/>
      <WelcomeSection/>
    </StyledAppContainer>;
}
