import React, { Component } from 'react';
import './index.css';

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h2>我是Parent组件</h2>

                {/* children props */}
                {/* <A>
                    <B/>
                </A> */}

                {/* render props */}
                <A render={carName => <B carName={carName}/>}/>
            </div>
        );
    }
};

class A extends Component {
    state = {carName: '特斯拉'};

    render() {
        return (
            <div className="a">
                <h2>我是A组件</h2>

                {/* children props */}
                {/* {this.props.children} */}

                {/* render props */}
                {this.props.render(this.state.carName)}
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="b">
                <h2>我是B组件</h2>
                <h4>我从A组件获得了一辆车：{this.props.carName}</h4>
            </div>
        );
    }
}
