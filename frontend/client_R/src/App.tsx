import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Register from './components/register';
import Home from './pages/home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="auth" element = {< Register/>}/>
        </Routes>
    </Router>
  )
}

export default App
