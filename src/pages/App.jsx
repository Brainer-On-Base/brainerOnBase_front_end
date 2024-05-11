import { useState } from 'react'
import brainerCoin from '/brainerCoin.png'
import './App.css'
import useModals from '../hooks/useSweetAlert'
import { Canvas } from '@react-three/fiber'
import CoinRain from '../components/CoinRain'
import { StyledAppContainer, StyledHomeContent, StyledInitAppContainer } from '../components/styled-components/container'
import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../components/styled-components/buttons'

function App() {
  const {useTextModal} = useModals()
  const navigate = useNavigate()

  return (
    <StyledInitAppContainer>
      <Canvas
        style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
        camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ 0, 0, 6 ]
          } }
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
      <p className="read-the-docs">
        ARE YOU A NO BRAINER ?
      </p>
      <div className="card">
        <StyledButton onClick={() => navigate('/home')}>
          JOIN THE COMMUNITY
        </StyledButton>
      </div>
      </StyledHomeContent>

    </StyledInitAppContainer>
  )
}

export default App
