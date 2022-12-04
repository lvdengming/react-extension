import React from 'react'

// 类式组件
// class Demo extends React.Component {
//     inputRef = React.createRef();
//     printInput = () => console.log(this.inputRef.current.value);

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.inputRef}/>
//                 <button onClick={this.printInput}>点击打印输入的内容</button>
//             </div>
//         )
//     }
// }

// 函数式组件
function Demo() {
    const inputRef = React.useRef();
    const printInput = () => console.log(inputRef.current.value);

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={printInput}>点击打印输入的内容</button>
        </div>
    );
}


export default Demo;
