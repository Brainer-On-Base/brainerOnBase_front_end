import { useState } from 'react'
import reactLogo from '/Designer (5).png'
import viteLogo from '/Designer (5).png'
import './App.css'
import useModals from './hooks/useSweetAlert'

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
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
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
    </>
  )
}

export default App
