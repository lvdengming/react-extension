import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom';
import {routes} from './routes';
import './index.css';

export default function RouteDemo() {
    const computedClassName = ({isActive}) => isActive ? 'link active' : 'link';
    const element = useRoutes(routes);

    return (
        <div className="container">
            <h2>React Router Demo</h2>
            <div className="main">
                <nav>
                    {/* 路由链接 */}
                    <NavLink to="/home" className={computedClassName}>Home</NavLink>
                    <NavLink to="/about" className={computedClassName}>About</NavLink>
                </nav>
                {/* 注册路由 */}
                {element}
            </div>
        </div>
    );
};
