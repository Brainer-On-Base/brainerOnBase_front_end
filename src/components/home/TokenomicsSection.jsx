import React from "react";
import {
  StyledCard,
  StyledTokenomicsSection,
} from "../styled-components/container";
import handleAnimationScroll from "../../hooks/handleAnimationScroll";
import BubbleDialog from "../BubbleDialog";
import { motion } from "framer-motion";

export default function TokenomicsSection() {
  const { isVisible } = handleAnimationScroll(".target");
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <StyledTokenomicsSection id="tokenomics">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.2 }} // 1s delay after entering viewport
      >
        TOKENOMICS
      </motion.h2>
      <StyledCard
        className={`animate__animated ${
          isVisible[0] ? "animate__backInLeft" : ""
        } target`}
        style={{
          visibility: isVisible[0] ? "visible" : "hidden",
          alignItems: "center",
        }}
      >
        <div>
          <h2>LIQUIDITY & MARKETS</h2>
          <p style={{ marginTop: "-40px", marginBottom: "2em" }}>
            55% - 5.500.000.000
          </p>
          <p>
            Jump into the <span>SOCIETY</span>, play our <span>GAME</span>, and
            burn while you earn. Every move, every quest, every win burns
            tokens.
            <span>INVITE</span> your crew, explore the <span>WORLD</span>, and
            fuel the fire together.
          </p>
        </div>
        <img style={{ marginRight: 0 }} src="./trading.png" />
      </StyledCard>

      <StyledCard
        className={`animate__animated ${
          isVisible[1] ? "animate__backInRight" : ""
        } target`}
        style={{
          visibility: isVisible[1] ? "visible" : "hidden",
          alignItems: "center",
        }}
      >
        <img style={{ marginLeft: 0 }} src="./burning.png" />
        <div>
          <h2>PLAY TO BURN</h2>
          <p style={{ marginTop: "-40px", marginBottom: "2em" }}>
            20% - 2,000,000,000
          </p>
          <p>
            Join our <span>SOCIETY</span> and dive into the <span>GAME</span>!
            Fuel your adventure by <span>PLAYING TO EARN</span> and triggering{" "}
            <span>TOKEN BURNS</span> through your actions. This allocation
            powers the entire <span>GAME ECONOMY</span>: from rewards to burn
            mechanics.
            <span> INVITE</span> your crew and explore our <span>WORLD</span>
          </p>
        </div>
      </StyledCard>
      <StyledCard
        className={`animate__animated ${
          isVisible[2] ? "animate__backInLeft" : ""
        } target`}
        style={{
          visibility: isVisible[2] ? "visible" : "hidden",
          alignItems: "center",
        }}
      >
        <div>
          <h2>DEVELOPMENT TEAM</h2>
          <p style={{ marginTop: "-40px", marginBottom: "2em" }}>
            10% - 1.000.000.000
          </p>
          <p>
            The minds behind the madness. Our devs are here to{" "}
            <span>BUILD</span> the metaverse, craft experiences, and push
            updates non-stop. With vision, code, and a lot of coffee, they keep
            the <span>BRAINER SOCIETY</span> alive and growing.
          </p>
        </div>
        <img style={{ marginRight: 0 }} src="./development.png" />
      </StyledCard>
      <StyledCard
        className={`animate__animated ${
          isVisible[4] ? "animate__backInLeft" : ""
        } target`}
        style={{
          visibility: isVisible[4] ? "visible" : "hidden",
          alignItems: "center",
        }}
      >
        <img style={{ marginLeft: 0 }} src="./rewards2.png" />

        <div>
          <h2>REWARDS & GOVERNANCE</h2>
          <p style={{ marginTop: "-40px", marginBottom: "2em" }}>
            10% - 1.000.000.000
          </p>
          <p>
            We empower our community through <span>STAKING REWARDS</span> and{" "}
            <span>GOVERNANCE</span>. Token holders who stake will earn passive
            income while also gaining a voice in key decisions.{" "}
            <span>YOUR TOKENS</span> don’t just sit — they{" "}
            <span>WORK FOR YOU</span>. This 10% fuels participation, engagement,
            and shared ownership of our <span>SOCIETY</span>.
          </p>
        </div>
      </StyledCard>
      <StyledCard
        className={`animate__animated ${
          isVisible[3] ? "animate__backInRight" : ""
        } target`}
        style={{
          visibility: isVisible[3] ? "visible" : "hidden",
          alignItems: "center",
        }}
      >
        <div>
          <h2>MARKETING & PROMOTION</h2>
          <p style={{ marginTop: "-40px", marginBottom: "2em" }}>
            5% - 500.000.000
          </p>
          <p>
            You can build the best game ever — but without exposure, no one
            plays it. That’s where <span>MARKETING</span> comes in. From viral
            drops to <span>STRATEGIC COLLABS</span>, this fund helps us make
            noise, get seen, and bring new brains into the fam.
          </p>
        </div>
        <img style={{ marginRight: 0 }} src="./marketingBrain.png" />
      </StyledCard>
    </StyledTokenomicsSection>
  );
}
