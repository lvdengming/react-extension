import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import './index.css';

// 通过React的lazy函数配合import()函数动态加载路由组件 => 路由组件代码会被分开打包
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

export default class RouterCase extends Component {
    render() {
        return (
            <div className="container">
                <h2>React Router Demo</h2>
                <div className="main">
                    <nav>
                        <NavLink to="/home" className="link">Home</NavLink>
                        <NavLink to="/about" className="link">About</NavLink>
                    </nav>
                    {/* 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面 */}
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Switch>
                            <Route path="/home" component={Home} className="content"/>
                            <Route path="/about" component={About} className="content"/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
};
