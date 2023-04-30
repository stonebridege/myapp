import React, {Component} from "react";
import Film from "./maizuo-advanced/Film";
import Cinema from "./maizuo-advanced/Cinema";
import Center from "./maizuo-advanced/Center";
import Tabbar from "./maizuo-advanced/Tabbar"
import Navbar from "./maizuo-advanced/Navbar";

import "./css/maizuo.css"

export default class App extends Component {
    //1.父组件中设置状态(state)
    // - list:保存渲染Tabbar时的数据，即渲染页面最下面的导航栏《电影》、《影院》、《我的》
    // - current:保存导航栏中哪个模块被触发，需要在Tabbar模块中渲染其颜色为红色表示被激活，父页面中需要切换到该模块的页面(Film,Cinema,Center)
    state = {
        list: [
            {id: 0, text: "电影"},
            {id: 1, text: "影院"},
            {id: 2, text: "我的"}
        ],
        current: 1
    }

    //2.页面刷新触发hanleClick函数，执行setState函数，改变state。render()函数马上就会重新渲染，就会执行{}中的whichCinema
    whichCinema() {
        switch (this.state.current) {
            case 0:return <Film></Film>
            case 1:return <Cinema></Cinema>
            case 2:return <Center></Center>
            default:return null
        }
    }

    render() {
        return (
            <div>
                {/*3.子组件Navbar显示《返回》《center》按钮，当按center,子组件Navbar触发event指向的函数，触发setState()修改current*/}
                <Navbar event={(index) => {
                    console.log("Navbar-center", "告诉Tabbar切换到center组件")
                    this.setState({
                        current: index
                    })
                }}></Navbar>
                {/*4.当state的值改变时触发改函数*/}
                {this.whichCinema()}
                {/*5.子组件Tabbar渲染页面最下面的导航栏，具体渲染的数据通过list传递，导航栏哪一个按钮显示被触发的样式由current属性决定
                子组件Tabbarcurrent无法改变current值，需要其触发event指定的函数，由父组件的event()改变，再通过current传递给子组件Tabbar*/}
                <Tabbar event={(index) => {
                    console.log("父组件定义", index)
                    this.setState({
                        current: index
                    })
                }} current={this.state.current} list={this.state.list}></Tabbar>
            </div>
        )
    }
}