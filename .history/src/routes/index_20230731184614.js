import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Login from './pages/Login';
import Register from './pages/Register';

const publicRoutes = [
    {path: '/home', e: Home},
    {path: '/about', component: About},
    {path: '/tours', component: Tours},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
