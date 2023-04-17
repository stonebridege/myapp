import React, {Component} from "react";

/**
 * 根组件App
 */
export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Tabbar></Tabbar>
                <Swiper></Swiper>
            </div>
        )
    }
}

/**
 * 类组件
 */
class Child extends Component {
    render() {
        return <div>Child</div>
    }
}

/**
 * 类组件
 */
class Navbar extends Component {
    render() {
        return <div>Navbar<Child></Child></div>
    }
}

/**
 * 普通函数式组件
 */
function Swiper() {
    return <div>swiper</div>
}

/**
 * 箭头函数组件
 */
const Tabbar = () => <div>tabular</div>