import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Login from './pages/Login';
import Register from './pages/Register';

const publicRoutes = [
    {path: '/home', element: Home},
    {path: '/about', element: About},
    {path: '/tours', element: Tours},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
