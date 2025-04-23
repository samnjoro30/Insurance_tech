import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register from './components/register';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Great App Insurance</h1> */}
      <Register />
    </>
  )
}

export default App
