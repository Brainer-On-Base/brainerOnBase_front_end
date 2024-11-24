import React from "react";
import { StyledFlexFullCenterContainer, StyledHomeSection } from "../styled-components/container";
import { View } from "@react-three/drei";
import NightBackground from "../NIghtBackground";
import Navbar from "../Navbar/Navbar";
import UseContract from "../../hooks/useContract";
import { StyledButton } from "../styled-components/buttons";
import Game from "./Game";
import { styled } from "@mui/system";

export default function BrainerOnBaseMain() {
  const {isConnected, connectWallet} = UseContract()
  const [isGameStarted, setIsGameStarted] = React.useState(false);
  const [gameNavigation, setGameNavigation] = React.useState('main');


  return (
    <StyledFlexFullCenterContainer 
      style={{
        backgroundImage: 'linear-gradient(to bottom, #230f44, #242424)',
         height:'100vh',
        overflow: 'hidden',
        }}
          
         >
      <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1, top: 0, bottom: 0 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
        <NightBackground/>
      {isGameStarted && <Game/>}
      </View>
      <Navbar/>
        {isConnected && !isGameStarted ? 
        <StyledGameMain>
            <h1 className={'animate__animated animate__backInDown'}>BRAINER</h1>
            <h1 className={'animate__animated animate__fadeInDown animate__delay-1s'}>N BASE</h1>
          
            <StyledButton className={'animate__animated animate__fadeInDown animate__delay-2s'} style={{zIndex: 2, padding:'1em', width:'280px'}} size={'1.8em'} onClick={() => {setIsGameStarted(true), setGameNavigation('society')}} >
              JOIN SOCIETY
            </StyledButton>
            <StyledButton className={'animate__animated animate__fadeInDown animate__delay-3s'} style={{zIndex: 2, padding:'1em', width:'280px', margin:'1em'}} size={'1.8em'} onClick={() => setGameNavigation('map')}>
              SOCIETY MAP
            </StyledButton>
            <StyledButton className={'animate__animated animate__fadeInDown animate__delay-4s'} style={{zIndex: 2, padding:'1em', width:'280px'}} size={'1.8em'} onClick={() => setGameNavigation('settings')}>
              SETTINGS
            </StyledButton>
        </StyledGameMain>
      : !isGameStarted ?
       <StyledFlexFullCenterContainer style={{flexDirection:'column', marginTop:'4em'}}>
        <img src="./gamingbrainer.png" style={{width:'300px'}} className={`animate__animated animate__fadeInDown animations`}/>
        <StyledButton
          style={{zIndex: 2, marginTop:'2em'}}
          size={'2em'}
          onClick={connectWallet}
        >
            CONNECT WALLET
        </StyledButton>
      </StyledFlexFullCenterContainer> : <></>}

    </StyledFlexFullCenterContainer>
  
  );
}


export const StyledGameMain = styled(StyledHomeSection)`
    // .astronaut{
    //     filter: drop-shadow(0 0 5em #c464ffaa);

    //     width: 300px;
    //     animation: fly_short 3.5s infinite alternate, fadeInUp 0.2s;
    //     // filter: drop-shadow(0 0 2em #c464ffaa);
    // }
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h1{
            transition: filter 300ms;
            font-family: "Luckiest Guy", cursive;
            text-shadow:
              0 .0377358491em 0 #f8b8b8, 
              .0125786164em .0377358491em 0
              #f8b8b8, .0125786164em -.0125786164em 0
              #f8b8b8, -.0125786164em .0125786164em 0
              #f8b8b8, -.0125786164em -.0125786164em;
            &:nth-of-type(1){
                margin-top: 80px;
                font-size: 140px;
                color: #ff437d;
            }
            &:nth-of-type(2){
                margin-top: -80px;
                font-size: 90px;
                color: #88;
                color: white;
                text-shadow: none;

                   &::before {
                    content: "";
                    display: inline-block;
                    width: 80px; /* Ajusta el tamaño según el logo */
                    height: 80px;
                    background-image: url('./baseLogo.png'); /* Cambia por la ruta de tu logo */
                    background-size: contain;
                    background-repeat: no-repeat;
                    margin-right: 2px; /* Espacio entre el logo y el texto */
                    vertical-align: middle; /* Alinea verticalmente con el texto */
                }
            }
        }
      .img1{
          width: 250px;
          position: absolute;
          right: 50px;
          bottom: -250px;
          transition: filter 300ms;
          z-index: 9999;
          animation: fly_short 2s infinite alternate;

      }

    @media(max-width: 650px){


    }


`