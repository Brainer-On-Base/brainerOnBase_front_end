import React from 'react'
import ReactDOM from 'react-dom/client'
import 'animate.css'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
)
