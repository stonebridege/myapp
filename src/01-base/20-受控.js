import React, {Component} from 'react';
import Navbar from "./Navbar/Navbar";

export default class App extends Component {
    //1.定义状态username，在表单元素的value和该状态绑定
    state = {
        username: 'stonebridge'
    }

    render() {
        return (
            <div>
                <h1>登录</h1>
                {/*2.在表单元素上设置了value属性和状态里的值绑定。当已经提供了value属性，如果不设置onChang处理函数，他就只会渲染成只读*/}
                <input type="text" value={this.state.username} onChange={(event) => {
                    //3.设置onChange函数，当修改表单时，完成状态改变。
                    this.setState({
                        username: event.target.value
                    })
                }}/>
                {/*4.通过状态轻松获取表单输入的值*/}
                <button onClick={() => {
                    console.log(this.state.username)
                }}>登录
                </button>
                {/*5.通过setState函数完成设置或者清空*/}
                <button onClick={() => {
                    this.setState({
                        username: ''
                    })
                }}>重置
                </button>
                {/*6.当状态改变时，会触发render()函数，完成对子组件的重新渲染，新的值也会传递过去*/}
                <Navbar username={this.state.username}></Navbar>
            </div>
        );
    }
}
