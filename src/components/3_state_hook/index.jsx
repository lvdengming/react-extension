import React from 'react'

// 类式组件
// class Demo extends React.Component {
//     state = {count: 0};

//     increment = () => this.setState(state =>({count: state.count + 1}));

//     render() {
//         return (
//             <div>
//                 <h2>当前计数：{this.state.count}</h2>
//                 <button onClick={this.increment}>点我+1</button>
//             </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    // 初始化状态
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Tom');

    // 第一种写法，参数为非函数值
    // const increment = () => setCount(count + 1);
    // 第二种写法，参数为函数
    const increment = () => setCount(count => count + 1);
    const changeName = () => setName('Jack');

    return (
        <div>
            <h2>当前计数：{count}</h2>
            <button onClick={increment}>点我+1</button>
            <hr/>
            <h2>当前名称：{name}</h2>
            <button onClick={changeName}>点我修改名称</button>
        </div>
    );
}

export default Demo;
