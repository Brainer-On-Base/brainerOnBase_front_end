import { useState } from 'react'
import brainerCoin from '/brainerCoin.png'
import './App.css'
import useModals from './hooks/useSweetAlert'
import { Canvas } from '@react-three/fiber'
import CoinRain from './components/CoinRain'
import { StyledAppContainer, StyledHomeContent } from './components/styled-components/container'

function App() {
  const {useTextModal} = useModals()
  

  const handleModal = () => {
    useTextModal({
      text: 'FOR BUY THE PRESALE YOU HAVE TO SEND 0.2 SOL TO THE FOLLOWING ADDRESS',
      title: 'GET INTO PRESALE', 
      confirmButtonColor: '#ff437d', 
      textColor: 'white',
      onConfirmFunction: () => alert('anotado')
    })
  }


  return (
    <StyledAppContainer>
      <Canvas
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: -1 }}
        camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 0, 0, 6 ]
          } }
          // onCreated={created}
        >
        <CoinRain/>
    </Canvas>
    <StyledHomeContent>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={brainerCoin} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>BRAINER</h1>
      <div className="card">
        <button onClick={() => handleModal()}>
          BUY PRE-SALE
        </button>
      </div>
      <p className="read-the-docs">
        COMING SOON
      </p>
      </StyledHomeContent>

    </StyledAppContainer>
  )
}

export default App
