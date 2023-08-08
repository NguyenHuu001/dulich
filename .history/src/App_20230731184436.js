import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
function App() {
    return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route key={} />
          })}
        </Routes>
      </div>
    </Router>
    );
}

export default App;
