import React from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import TokenomicsSection from "../components/home/TokenomicsSection";
import styled from "styled-components";

const TokenDetails = () => {
  return (
    <AppLayout
      title="BRAINER TOKEN"
      subtitle="$BRNR"
      id={"playerHub"}
      style={{ marginTop: "1em" }}
    >
      <TokenomicsSection />
    </AppLayout>
  );
};

export default TokenDetails;
