import React, {Component} from 'react';

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
    UNSAFE_componentWillMount () {
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

    //render()函数
    render() {
        console.log("Lifecycle01.jsx--->render")
        const {count} = this.state
        return (
            <div>
                <h2>当前求和为：{count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}