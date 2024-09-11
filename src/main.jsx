import React from 'react'
import ReactDOM from 'react-dom/client'
import 'animate.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { Canvas } from '@react-three/fiber'
import { Preload, View } from '@react-three/drei'
import Provider from './provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
    <BrowserRouter>
      <Routes />
      <Canvas
          style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
          eventSource={document.getElementById('root')}>
          <View.Port />
          <Preload all />
        </Canvas>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
