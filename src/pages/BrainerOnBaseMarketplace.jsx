import React, { useContext, useEffect } from "react";
import Marketplace from "../components/society/marketplace/Marketplace";
import AppLayout from "../components/AppLayout/AppLayout";
import Web3Context from "../provider/Web3Provider/Web3Context";

const BrainerOnBaseMarketplace = () => {
  const { account, isConnected } = useContext(Web3Context);

  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("marketplace");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <AppLayout title={"Marketplace"} id={"marketplace"}>
      <Marketplace />
    </AppLayout>
  );
};

export default BrainerOnBaseMarketplace;
