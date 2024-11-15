import React from "react";
import { StyledFlexFullCenterContainer } from "../styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../NIghtBackground";
import Navbar from "../Navbar/Navbar";
import UseContract from "../../hooks/useContract";
import { StyledButton } from "../styled-components/buttons";

export default function BrainerOnBaseMain() {
  const {isConnected, connectWallet} = UseContract()


  return (
    <StyledFlexFullCenterContainer 
      style={{
        backgroundImage: 'linear-gradient(to bottom, #230f44, #242424)',
         height:'100vh',
        overflow: 'hidden',
        }}
          
         >
      <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}>
        <NightBackground/>
      </View>
      <Navbar/>

      {isConnected ? 
      <StyledFlexFullCenterContainer style={{flexDirection:'column', marginTop:'4em'}}>
        <img src="./videogamegains.png" style={{width:'300px'}} className={`animate__animated animate__fadeIn animations`}/> 
        <h1 style={{fontFamily:'"Luckiest Guy", cursive',fontSize:'35px', textAlign:"center"}} className={`animate__animated animate__fadeInDown animations animate__delay-1s`}>The game is under construction!</h1>

      </StyledFlexFullCenterContainer>

      :
      <StyledFlexFullCenterContainer style={{flexDirection:'column', marginTop:'4em'}}>
        <img src="./gamingbrainer.png" style={{width:'300px'}} className={`animate__animated animate__fadeInDown animations`}/>
        <StyledButton
          style={{zIndex: 2, marginTop:'2em'}}
          size={'2em'}
          onClick={connectWallet}
        >
            CONNECT WALLET
        </StyledButton>
      </StyledFlexFullCenterContainer>}

    </StyledFlexFullCenterContainer>
  
  );
}
