import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './';
function App() {
    return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            return <Route key={index} path={route.path} />
          })}
        </Routes>
      </div>
    </Router>
    );
}

export default App;
