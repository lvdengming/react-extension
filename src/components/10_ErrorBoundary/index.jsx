import React, { Component } from 'react';

export default class Parent extends Component {
    // 当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error);
        return {hasError: true};
    }

    state = {
        hasError: '',    // 用于标识子组件是否产生错误

        // 正确数据
        getName: () => 'Parent Component'

        // 错误数据
        // getName: 'Parent Component'
    };

    // 子组件产生错误回调函数
    componentDidCatch(error, info) {
        console.log('componentDidCatch', '统计错误，反馈给服务器，用于通知编码人员进行bug修复');
        console.log('componentDidCatch', error, info);
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                <div>{this.state.getName()}</div>
                <hr/>
                {this.state.hasError ? <h2>当前网络不稳定，请检查你的网络配置</h2> : <Child/>}
            </div>
        );
    }
};

class Child extends Component {
    state = {
        // 数据正确
        // students: [
        //     {id: '001', name: 'zhangsan'},
        //     {id: '002', name: 'lisi'},
        //     {id: '003', name: 'wangwu'},
        // ]
        
        // 数据错误
        students: 'zhangsan, lisi, wangwu'
    }

    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                <ul>
                    {this.state.students.map(student => <li key={student.id}>{student.name}</li>)}
                </ul>
            </div>
        );
    }
}
