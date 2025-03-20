import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout/AppLayout";
import TokenomicsSection from "../components/home/TokenomicsSection";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HBox, HTitle } from "../HocComponents";
import TokenSection from "../components/home/TokenSection";

const TokenDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const element = document.getElementById("brnrToken");
    element.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <AppLayout
      title="BRAINER TOKEN"
      subtitle="$BRNR"
      id={"brnrToken"}
      style={{ marginTop: "1em" }}
    >
      <HBox>
        <HBox
          width="60%"
          height="60%"
          background={"shadePurpleDark"}
          direction="column"
          justify="flex-start"
          align="flex-start"
          padding="20px"
          borderRadius="10px"
          gap="40px"
        >
          <HTitle>Are you a no brainer?</HTitle>
          <HTitle>Join the Brainer Society</HTitle>
          <HTitle fontSize={"20px"} useTitleCase={false}>
            **$BRNR** is more than just a currency; it’s the symbol of our
            community, the engine that drives our ideas and our mission to break
            free from centralized control. Join the Brainer revolution.
          </HTitle>
        </HBox>
        <HBox width="40%" height="40%" background={"shadePurpleLight"}>
          aaa
        </HBox>
      </HBox>
      <TokenSection style={{ marginTop: "4em" }} />

      {/* <TokenImage>
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            <img
              src="/commonBrainer.png"
              alt="Brainer Token"
              width="200"
              height="200"
            />
          </motion.div>
        </TokenImage> */}

      <TokenomicsSection />
    </AppLayout>
  );
};

export default TokenDetails;
