import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Tours from './pages/Tours'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
    return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Tours' element={<Tours />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Register' element={<Register />}/>
        </Routes>
      </div>
    </Router>
    );
}

export default App;
