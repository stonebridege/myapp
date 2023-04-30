import React, {Component} from 'react';

//无状态组件Tabbar
// export default class Tabbar extends Component {
//     state = {}
//
//     render() {
//         return (
//             <div>
//                 <ul>
//                     {
//                         //1.获取来自父组件的属性list，将其遍历渲染出导航栏
//                         this.props.list.map((item, index) =>
//                             //2.当用户点击导航栏时，触发handleClick函数
//                             <li onClick={() => this.handleClick(index)}
//                                 //3.获取来自父组件的属性current，为被点击的导航栏模块渲染被点击后的样式
//                                 className={this.props.current === index ? 'active' : ''}
//                                 key={item.id}>{item.text}</li>
//                         )
//                     }
//                 </ul>
//             </div>
//         );
//     }
//
//     // 子组件是无法改父组件传来的值(props)的，但是可以通过通知父组件来完成修改，然后再传递到子组件。
//     handleClick = (index) => {
//         this.props.event(index)
//     }
// }


// 1.定义函数组件Tabbar,函数组件没有this的概念，直接使用参数props
const Tabbar = (props) => {
    //2.在函数组件中创建handleClick函数，用于回调父组件的事件，也可以直接调用props.event(index)
    function handleClick(index) {
        props.event(index)
    }

    return <div>
        <ul>
            {
                //3.根据父组件传递来的数据进行渲染导航栏，通过props.list即可获取数据
                props.list.map((item, index) =>
                    //4.根据点击导航栏按钮触发handleClick函数
                    <li onClick={() => handleClick(index)}
                        className={props.current === index ? 'active' : ''}
                        key={item.id}>{item.text}</li>
                )
            }
        </ul>
    </div>
}
export default Tabbar