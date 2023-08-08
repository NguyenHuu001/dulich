import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '.'
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
