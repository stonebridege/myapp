import React, {Component} from 'react';


/**
 * 1.自定义Filed组件，主要包含输入框的label元素和input输入框元素
 */
class Filed extends Component {
    //2.定义state用于存储用户输入的值
    state = {
        value: ''
    }

    //3.便于父组件通过ref清空Filed的state
    clear() {
        this.setState({
            value: ''
        })
    }

    //4.便于父组件通过ref设置Filed的state
    setValue(value) {
        this.setState(value)
    }

    render() {
        return (
            <div style={{background: 'yellow'}}>
                {/*5.获取来自父组件的props，获取label、type；
                当用户输入数据时将用户输入的值设置进入state
                通过value设置默认值，也是便于通过clear()和setValue(value)修改*/}
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(evt) => {
                    this.setState({
                        value: evt.target.value
                    })
                }} value={this.state.value}/>
            </div>
        )
    }
}


export default class App extends Component {
    // 6.定义ref属性
    username = React.createRef();
    password = React.createRef();

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                {/*//7.设置ref属性*/}
                <Filed label='用户名' type='text' ref={this.username}></Filed>
                <Filed label='密码' type='password' ref={this.password}></Filed>

                <button onClick={() => {
                    // 8.通过this.username.current.state.value可以获取子组件的值
                    console.log("username：" + this.username.current.state.value)
                    console.log("username：" + this.password.current.state.value)
                }}>登录
                </button>

                <button onClick={() => {
                    // 9.通过this.username.current.clear()调用子组件的子组件的clear()方法
                    this.username.current.clear()
                    this.password.current.clear()
                }}>重置
                </button>
            </div>
        );
    }
}