import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './components/register';
import Home from './pages/home';
import DashUsers from './pages/dash';
import './App.css';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element ={<Home />}/>
          <Route path="/login" element={<Register initialMode="login" />} />
          <Route path="/register" element={<Register initialMode="register" />} />
          <Route path="/dashboard" element= {<DashUsers/>} />
        </Routes>
    </Router>
  )
}

export default App
