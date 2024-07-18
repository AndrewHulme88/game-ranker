import { useState } from 'react'
import PreferenceGame from './components/PreferenceGame'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreferenceGame />
    </>
  )
}

export default App
