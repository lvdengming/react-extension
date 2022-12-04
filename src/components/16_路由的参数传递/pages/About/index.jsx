import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

export default function About() {
    return (
        <div>
            <span>我是About组件的内容</span>
            <nav className="nav-container">
                {/* 编写路由链接 */}
                <NavLink to="news" className="nav-item">News</NavLink>
                <NavLink to="message" className="nav-item">Message</NavLink>
            </nav>
            {/* 注册路由 */}
            <Outlet/>
        </div>
    );
};
