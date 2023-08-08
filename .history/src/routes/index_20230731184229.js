import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Login from './pages/Login';
import Register from './pages/Register';

const publicRoutes = [
    {path: '/home', component: Home},
    {path: '/about', component: Home},
    {path: '/tours', component: Home},
    {path: '/login', component: Home},
    {path: '/register', component: Home},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
