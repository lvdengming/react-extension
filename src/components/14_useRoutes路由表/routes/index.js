import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

export const routes = [
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    }
];
