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
        {/* <CoinRain /> */}
      </View>
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
