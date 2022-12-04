import React from 'react'

// 类式组件
// class Demo extends React.Component {
//     state = {count: 0};

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             const {count} = this.state;
//             this.setState({count: count + 1});
//         }, 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer);
//         console.log('unmount');
//     }

//     render() {
//         return (
//             <div>
//                 <h2>当前计数：{this.state.count}</h2>
//                 {/* index.js：中设置setTimeout(() => root.unmount(), 5000)，5s后自动卸载组件 */}
//             </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    // 初始化状态
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Tom');

    React.useEffect(() => {
        console.log('abc');
        return () => {
            console.log('abc - unmount')
        };
    });

    React.useEffect(() => {
        console.log('123');
        return () => {
            console.log('123 - unmount')
        };
    }, []);


    return (
        <div>
            <h2>当前计数：{count}，姓名：{name}</h2>
            <button onClick={() => setCount(count + 1)}>点我+1</button>
            <button onClick={() => setName('Jack')}>修改姓名</button>
        </div>
    );
}

export default Demo;
