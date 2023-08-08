import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
