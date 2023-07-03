import React, {Component} from 'react';

export default class Lifecycle02 extends Component {

    state = {carName: '奔驰'}

    changeCar = () => {
        this.setState({carName: "奥拓"})
    }


    render() {
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
    //componentWillReceiveProps首次渲染不会调用，只有再次渲染会触发
    componentWillReceiveProps() {
        console.log("B组件的-----componentWillReceiveProps" + this.props.carName)
    }

    //shouldComponentUpdate首次渲染不会调用，只有再次渲染会触发
    shouldComponentUpdate() {
        console.log("B组件的-----shouldComponentUpdate")
        return true;
    }

    //componentWillUpdate首次渲染不会调用，只有再次渲染会触发
    componentWillUpdate() {
        console.log("B组件的-----componentWillUpdate")
    }

    //componentDidUpdate首次渲染不会调用，只有再次渲染会触发
    componentDidUpdate() {
        console.log("B组件的-----componentDidUpdate")
    }

    render() {
        console.log("B组件的-----render")
        return (
            <div>
                <div>我是B组件,接收的车是：{this.props.carName}</div>
            </div>
        );
    }
}