import React from 'react';
import { useLocation } from 'react-router-dom';

const messages = [
    {id: '001', content: '消息1的内容'},
    {id: '002', content: '消息2的内容'},
    {id: '003', content: '消息3的内容'}
];

export default function Detail() {
    // 获取this.props.match
    // const match = useMatch('/about/message/detail/:id/:title');
    // console.log(match);

    // 获取this.props.location
    const location = useLocation();
    console.log(location);

    // 接收params参数
    // const {id, title} = useParams();

    // 接收search参数
    // const [search, setSearch] = useSearchParams();
    // const id = search.get('id');
    // const title = search.get('title');

    // 接收state参数
    const {state: {id, title}} = useLocation();

    const {content} = messages.find(msg => msg.id === id);
    return (
        <ul style={{marginTop: '25px', paddingLeft: '25px', paddingTop: '15px', borderTop: '1px solid #dedede'}}>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>CONTENT: {content}</li>

            {/* 修改search参数 */}
            {/* <button onClick={() => setSearch('id=002&title=消息002')}>change search</button> */}
        </ul>
    );
}
