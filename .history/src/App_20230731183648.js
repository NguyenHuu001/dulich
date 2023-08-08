import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Tours from './pages/Tours'
import Lo
function App() {
    return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/home' element/>
        </Routes>
      </div>
    </Router>
    );
}

export default App;
