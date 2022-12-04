import React, { Fragment, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Message() {
    const [messages] = useState([
        {id: '001', title: 'message001'},
        {id: '002', title: 'message002'},
        {id: '003', title: 'message003'}
    ]);
    const navigate = useNavigate();

    // 若通过params参数和search参数跳转，直接将数据放到跳转链接中，第二个参数可选
    const viewDetail = (message) => {
        navigate('detail', {
            replace: false,
            state: {...message}
        });
    };
    const toNews = () => navigate('../news', {replace: true});
    const back = () => navigate(-1);
    const forward = () => navigate(1);

    return (
        <Fragment>
            <ul style={{marginLeft: '25px'}}>
                {/* 路由链接 */}
                {messages.map(msg => {
                    return (
                        <li key={msg.id}>
                            {/* 传递params参数 */}
                            {/* <Link to={`detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                            {/* 传递search参数 */}
                            {/* <Link to={`detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                            {/* 传递state参数 */}
                            <Link to="detail" state={{id: msg.id, title: msg.title}}>
                                <span>{msg.title}</span>
                            </Link>
                            <button onClick={() => viewDetail(msg)}>查看详情</button>
                        </li>
                    )
                })}
            </ul>
            {/* 注册路由 */}
            <Outlet/>

            <button onClick={toNews}>toNews</button>
            <button onClick={back}>←</button>
            <button onClick={forward}>→</button>
        </Fragment>
    );
}
