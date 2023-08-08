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
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/tours' element={<Tours />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </div>
    </Router>
    );
}

export default App;
