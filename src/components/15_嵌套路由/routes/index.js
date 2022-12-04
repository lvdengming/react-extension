import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/About/News';
import Message from '../pages/About/Message';

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
        element: <About/>,
        children: [
            {
                path: '',
                element: <Navigate to="news"/>
            },
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            }
        ]
    }
];
