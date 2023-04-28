import React, {Component} from "react";
import Navbar from "./component/Navbar";

export default class App extends Component {
    state = {
        isShow: false
    }
    // 1.在父组件中定义函数handEvent，用于子组件触发调用
    handEvent = (number, username) => {
        this.setState({
            isShow: !this.state.isShow
        }, () => {
            console.log("isShow:" + this.state.isShow)
            console.log("number:" + number, "username:" + username)
        })
    }

    render() {
        return (
            <div>
                {/*2.父组件将函数作为props传递给子组件*/}
                <Navbar event={this.handEvent}></Navbar>
            </div>
        )
    }
}