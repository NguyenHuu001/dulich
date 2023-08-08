import Home from './pages';
import About from './pages/About';
import Tours from './pages/Tours';
import Login from './pages/Login';
import Register from './pages/Register';

const publicRoutes = [
    {path: '/home', element: Home},
    {path: '/about', element: About},
    {path: '/tours', element: Tours},
    {path: '/login', element: Login},
    {path: '/register', element: Register},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
