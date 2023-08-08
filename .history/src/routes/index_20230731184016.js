import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Login from './pages/Login';
import Register from './pages/Register';

const publicRoutes = [{
    <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/tours' element={<Tours />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
}];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
