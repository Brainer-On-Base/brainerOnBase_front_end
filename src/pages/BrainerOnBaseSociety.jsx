import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import BrainerSociety from "../components/society/society/BrainerSociety";

const BrainerOnBaseSociety = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("society");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <AppLayout title="SOCIETY" id={"society"}>
      <BrainerSociety />
    </AppLayout>
  );
};

export default BrainerOnBaseSociety;
