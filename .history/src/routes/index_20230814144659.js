import Home from '../pages/Home';
import About from '../pages/About';
import Tours from '../pages/Tours';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import ADETour from '../pages/AddTour';
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/tours', component: Tours },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart },
    { path: '/addTour', component: ADETour },
    { path: '/addTour', component: ADETour },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
