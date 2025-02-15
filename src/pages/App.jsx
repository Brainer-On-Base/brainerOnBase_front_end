import brainerCoin from "/moon.png";
import "./App.css";
import useModals from "../hooks/useSweetAlert";
import CoinRain from "../components/CoinRain";
import {
  StyledAppContainer,
  StyledHomeContent,
  StyledInitAppContainer,
} from "../components/styled-components/container";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/styled-components/buttons";
import { View } from "@react-three/drei";
import NightBackground from "../components/NIghtBackground";
import { motion } from "framer-motion";

const FlyingShips = () => {
  return (
    <>
      <motion.img
        src="/spaceship.png"
        alt="Ship 1"
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "160px",
          zIndex: 9999,
        }}
        animate={{
          x: ["110%", "-10%"],
          y: ["20%", "40%", "20%"],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          repeatType: "mirror",
        }}
      />
      <motion.img
        src="/brainerCoin5.png"
        alt="Ship 2"
        style={{
          position: "absolute",
          top: "80%",
          width: "160px",
          zIndex: 9999,
        }}
        animate={{
          x: ["-550%", "1000%"],
          y: ["-80%", "-50%", "-150%"],
          rotate: [0, -10, 10, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
    </>
  );
};

function App() {
  const { useTextModal } = useModals();
  const navigate = useNavigate();

  return (
    <StyledInitAppContainer>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          background: "linear-gradient(to bottom, #230f44, #242424)",
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6],
        }}
      >
        <NightBackground />
      </View>
      <FlyingShips />
      <StyledHomeContent>
        <div>
          <a href="/home">
            <img src={brainerCoin} className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1>BRAINER</h1>
        <div className="card">
          <StyledButton onClick={() => navigate("/home")}>
            JOIN THE SOCIETY
          </StyledButton>
        </div>
      </StyledHomeContent>
    </StyledInitAppContainer>
  );
}

export default App;
