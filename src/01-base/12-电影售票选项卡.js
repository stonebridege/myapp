import React, {Component} from "react";
import Film from "./maizuo/Film";
import Cinema from "./maizuo/Cinema";
import Center from "./maizuo/Center";

import "./css/maizuo.css"

export default class App extends Component {
    state = {
        //1.定义选项卡的列表list
        list: [
            {
                id: 1,
                text: "电影",
                component: <Film></Film>
            },
            {
                id: 2,
                text: "影院",
                component: <Cinema></Cinema>
            },
            {
                id: 3,
                text: "我的",
                component: <Center></Center>
            },
        ],
        current: 0
    }

    //2.用户点击执行hanleClick函数，执行setState函数，改变state。render()函数马上就会重新渲染，就会执行{}中的whichCinema
    whichCinema() {
        // switch (this.state.current) {
        //     case 0:
        //         return <Film></Film>
        //     case 1:
        //         return <Cinema></Cinema>
        //     case 2:
        //         return <Center></Center>
        //     default:
        //         return null
        // }
        return this.state.list[this.state.current].component
    }

    render() {
        return (
            <div>
                {
                    this.whichCinema()
                }
                <ul>
                    {
                        // 3.渲染选项卡内的内容
                        this.state.list.map((item, index) =>
                            <li onClick={() => this.handleClick(index)}
                                className={this.state.current === index ? 'active' : ''}
                                key={item.id}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }

    //4.点击选项卡，切换到不同页面
    handleClick = (index) => {
        this.setState({
            current: index
        })
    }
}