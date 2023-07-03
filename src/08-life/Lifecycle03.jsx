import React, {Component} from 'react';

export default class Lifecycle02 extends Component {
    /**
     * 构造器constructor
     */
    constructor() {
        console.log("父组件A的--->constructor")
        super();
        //初始化状态
        this.state = {carName: '奔驰'}
    }

    changeCar = () => {
        this.setState({carName: "奥拓"})
    }

    //组件挂载完毕后调用的生命周期回调函数:componentDidMount
    componentDidMount() {
        console.log("父组件A的--->componentDidMount")
    }

    componentWillUnmount() {
        console.log("父组件A的--->componentWillUnmount")
    }

    //控制组件更新的”阀门“
    shouldComponentUpdate() {
        console.log("父组件A的--->shouldComponentUpdate")
        return true
    }

    //组件更新完毕的狗子
    componentDidUpdate() {
        console.log("父组件A的--->componentDidUpdate")
    }

    render() {
        console.log("父组件A的--->render")

        return (
            <div>
                <div>我是A组件</div>
                <button onClick={this.changeCar}>换车</button>
                <B carName={this.state.carName}></B>
            </div>
        );
    }
}

class B extends Component {
    //shouldComponentUpdate首次渲染不会调用，只有再次渲染会触发
    shouldComponentUpdate() {
        console.log("子组件B的-----shouldComponentUpdate")
        return true;
    }

    //componentDidUpdate首次渲染不会调用，只有再次渲染会触发
    componentDidUpdate() {
        console.log("子组件B的-----componentDidUpdate")
    }

    render() {
        console.log("子组件B的-----render")
        return (
            <div>
                <div>我是子组件B,接收的车是：{this.props.carName}</div>
            </div>
        );
    }
}