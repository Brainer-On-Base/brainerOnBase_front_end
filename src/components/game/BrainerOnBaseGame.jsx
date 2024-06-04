import React from "react";
import { StyledFlexFullCenterContainer } from "../styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../NIghtBackground";
import Navbar from "../Navbar";

export default function BrainerOnBaseGame() {
  return (
    <StyledFlexFullCenterContainer style={{background:'#242424', height:'100vh'}}>
      <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}>
        <NightBackground/>
      </View>
      <Navbar/>

      <StyledFlexFullCenterContainer style={{flexDirection:'column', marginTop:'4em'}}>
        <img src="./gamingbrainer.png" style={{width:'300px'}}/>
        <h1 style={{fontFamily:'"Luckiest Guy", cursive',fontSize:'35px', textAlign:"center"}}>The game is under construction!</h1>
      </StyledFlexFullCenterContainer>

    </StyledFlexFullCenterContainer>
  
  );
}
