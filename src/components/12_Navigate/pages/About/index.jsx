import React from 'react';
import { Navigate } from 'react-router-dom';

export default function About() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>我是About组件的内容</div>
            {count ? <Navigate to="/home" replace/> : count}
            <button onClick={() => setCount(1)}>点我通过Navigate组件跳转至首页</button>
        </div>
    );
};
