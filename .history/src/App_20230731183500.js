import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/home'/>
        </Routes>
      </div>
    </Router>
    );
}

export default App;
