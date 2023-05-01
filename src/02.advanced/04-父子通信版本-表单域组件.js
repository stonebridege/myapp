import React, {Component} from 'react';

/**
 * 1.自定义Filed组件，主要包含输入框的label元素和input输入框元素
 */
class Filed extends Component {
    render() {
        return (
            <div style={{background: 'yellow'}}>
                {/*2.根据父组件传递的属性里的label、type、value设置标签名称、input类型、默认值*/}
                {/*  当输入值时，触发onChange函数，将值传递到父组件*/}
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt) => {this.props.onChangeEvent(evt.target.value)}} value={this.props.value}/>
            </div>
        )
    }
}


export default class App extends Component {
    // 3.设置默认state状态，username的值默认从本地拿取
    state = {
        username: localStorage.getItem('username') + '',
        password: ''
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                {/*4.使用子组件Filed，将参数username默认值、label、type传递给子组件。
                 并设置回调函数，子组件onChange函数触发，将子组件的数据更新到state中*/}
                <Filed label='用户名' type='text' onChangeEvent={
                    (value) => {
                        this.setState({
                            username: value
                        })
                    }
                } value={this.state.username}></Filed>

                <Filed label='密码' type='password' onChangeEvent={
                    (value) => {
                        this.setState({
                            password: value
                        })
                    }
                } value={this.state.password}></Filed>

                {/*5.点击登录按钮，通过state就可以获取最新的username和password*/}
                <button onClick={() => {
                    console.log(this.state)
                }}>登录
                </button>

                {/*6.点击重置按钮，将state数据清空即可*/}
                <button onClick={() => {
                    this.setState({
                        username: '',
                        password: ''
                    })
                }}>重置
                </button>
            </div>
        );
    }
}