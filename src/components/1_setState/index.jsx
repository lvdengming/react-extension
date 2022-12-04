import React, { Component } from 'react';

export default class Demo extends Component {
    state = {count: 0};

    increment = () => {
        // 1.对象式的setState
        // const {count} = this.state;
        // this.setState({count: count + 1}, () => console.log('通过回调函数形式获取', this.state.count));
        // console.log('直接获取', this.state.count)

        // 2.函数式的setState
        this.setState(
            (state, props) => ({count: state.count + 1}),
            () => console.log('通过回调函数形式获取', this.state.count)
        );
        console.log('直接获取', this.state.count);
    };

    render() {
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.increment}>点我+1</button>
            </div>
        );
    }
};
