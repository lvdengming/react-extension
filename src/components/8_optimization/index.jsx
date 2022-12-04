import React, { PureComponent } from 'react';
import './index.css';

export default class Parent extends PureComponent {
    state = {carName: '奥迪'}
    changeCar = () => {
        // this.setState({carName: '特斯拉'});

        this.setState({});

        // const state = this.state;
        // state.carName = '特斯拉';
        // this.setState(state);
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.carName !== this.state.carName;
    // }

    render() {
        console.log('Parent -- render');
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的跑车：{this.state.carName}</span>
                <button onClick={this.changeCar}>换车</button>
                <Child/>
            </div>
        );
    }
};

class Child extends PureComponent {
    render() {
        console.log('Child -- render');
        return (
            <div className="child">
                <h3>我是Child组件</h3>
            </div>
        );
    }
};
