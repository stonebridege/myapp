import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    /**
     * 构造器constructor
     */
    constructor() {
        console.log("Lifecycle01.jsx--->constructor")
        super();
        //初始化状态
        this.state = {count: 0}
    }

    //组件将要挂载时调用的生命周期回调函数:componentWillMount
    UNSAFE_componentWillMount() {
        console.log("Lifecycle01.jsx--->componentWillMount")
    }

    //组件挂载完毕后调用的生命周期回调函数:componentDidMount
    componentDidMount() {
        console.log("Lifecycle01.jsx--->componentDidMount")
    }

    //+1按钮的回调
    add = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }
    //death按钮的组件
    death = () => {
        const targetNode = document.getElementById('test');
        ReactDOM.unmountComponentAtNode(targetNode);
        targetNode.remove();
    }

    componentWillUnmount() {
        console.log("Lifecycle01.jsx--->componentWillUnmount")
    }

    //控制组件更新的”阀门“
    shouldComponentUpdate() {
        console.log("Lifecycle01.jsx--->shouldComponentUpdate")
        return true
    }

    //组件将要更新的钩子函数
    componentWillUpdate() {
        console.log("Lifecycle01.jsx--->componentWillUpdate")
    }

    //组件更新完毕的狗子
    componentDidUpdate() {
        console.log("Lifecycle01.jsx--->componentDidUpdate")
    }

    //render()函数
    render() {
        console.log("Lifecycle01.jsx--->render")
        const {count} = this.state
        return (
            <div id='test'>
                <div>
                    <h2>当前求和为：{count}</h2>
                    <button onClick={this.add}>点我+1</button>
                    <button onClick={this.death}>卸载组件</button>
                </div>
            </div>
        );
    }
}
