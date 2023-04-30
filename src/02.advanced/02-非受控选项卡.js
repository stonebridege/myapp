import React, {Component} from "react";
import Film from "./maizuo/Film";
import Cinema from "./maizuo/Cinema";
import Center from "./maizuo/Center";
import Tabbar from "./maizuo/Tabbar"
import Navbar from "./maizuo/Navbar";

import "./css/maizuo.css"

export default class App extends Component {
    state = {
        current: 0
    }

    //2.用户点击执行hanleClick函数，执行setState函数，改变state。render()函数马上就会重新渲染，就会执行{}中的whichCinema
    whichCinema() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }

    render() {
        return (
            <div>
                <Navbar myevent={() => {
                    console.log("Navbar-center", "告诉Tabbar切换到center组件")
                    this.setState({
                        current: 2
                    })
                }}></Navbar>
                {this.whichCinema()}
                <Tabbar event={(index) => {
                    console.log("父组件定义", index)
                    this.setState({
                        current: index
                    })
                }} parentcurrent={this.state.current}></Tabbar>
            </div>
        )
    }
}