import { useState } from 'react'
import brainerCoin from '/brainerCoin.png'
import './App.css'
import useModals from '../hooks/useSweetAlert'
import { Canvas } from '@react-three/fiber'
import CoinRain from '../components/CoinRain'
import { StyledAppContainer, StyledHomeContent } from '../components/styled-components/container'
import { useNavigate } from 'react-router-dom'

function App() {
  const {useTextModal} = useModals()
  const navigate = useNavigate()

  const handleModal = () => {
    useTextModal({
      text: `FOR BUY THE PRESALE YOU HAVE TO SEND 0.2 SOL TO THE FOLLOWING ADDRESS: 8BanJUWdRMVi8us32LeJZPrGCxEr4sJPDAptf2iKfD9J`,
      title: 'ARE YOU A NO BRAINER?', 
      confirmButtonColor: '#ff437d', 
      textColor: 'white',
      onConfirmFunction: () => {}
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
      <p className="read-the-docs">
        ARE YOU A NO BRAINER ?
      </p>
      <div className="card">
        <button onClick={() => navigate('/home')}>
          JOIN THE COMMUNITY
        </button>
      </div>
      </StyledHomeContent>

    </StyledAppContainer>
  )
}

export default App
