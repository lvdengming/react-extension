import React, { Component } from 'react';
import './index.css';

// 创建Context容器对象
const MyContext = React.createContext();

export default class A extends Component {
    state = {name: 'Tom', age: 18};

    render() {
        const {name, age} = this.state;
        return (
            <div className="a">
                <h2>我是A组件</h2>
                <h3>我的用户名是：{name}，年龄是：{age}</h3>
                <MyContext.Provider value={{name, age}}>
                    <B/>
                </MyContext.Provider>
            </div>
        );
    }
};

class B extends Component {
    render() {
        return (
            <div className="b">
                <h2>我是B组件</h2>
                <C/>
            </div>
        );
    }
};

// class C extends Component {
//     // 声明接收Context
//     static contextType = MyContext;

//     render() {
//         const {name, age} = this.context;
//         return (
//             <div className="c">
//                 <h2>我是C组件</h2>
//                 <h3>我从A组件接收到的用户名是：{name}，年龄是：{age}</h3>
//             </div>
//         );
//     }
// };

function C() {
    return (
        <div className="c">
            <h2>我是C组件</h2>
            <h3>
                <MyContext.Consumer>
                    {({name, age}) => `我从A组件接收到的用户名是：${name}，年龄是：${age}`}
                </MyContext.Consumer>
            </h3>
        </div>
    );
}
