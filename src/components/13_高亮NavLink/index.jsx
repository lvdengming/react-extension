import React, { Component } from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './index.css';

export default class RouterCase extends Component {
    computedClassName = ({isActive}) => isActive ? 'link active' : 'link';

    render() {
        return (
            <div className="container">
                <h2>React Router Demo</h2>
                <div className="main">
                    <nav>
                        {/* 路由链接 */}
                        <NavLink to="/home" className={this.computedClassName}>Home</NavLink>
                        <NavLink to="/about" className={this.computedClassName}>About</NavLink>
                    </nav>
                    {/* 注册路由 */}
                    <Routes>
                        <Route path="/home" element={<Home/>} className="content"/>
                        <Route path="/about" element={<About/>} className="content"/>
                        <Route path="/" element={<Navigate to="/home"/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
};
