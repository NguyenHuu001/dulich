import Home from '../pages/Home';
import About from '../pages/About';
import Tours from '../pages/Tours';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/tours', component: Tours },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart },
    {path: '/adeTour'}
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
