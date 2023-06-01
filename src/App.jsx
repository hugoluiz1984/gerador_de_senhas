import { useState } from 'react'
import './App.css'
import GeradorSenhas from './GeradorSenhas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeradorSenhas />
    </>
  )
}

export default App
