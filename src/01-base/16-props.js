import React, {Component} from "react";
import Navbar from "./Navbar/Navbar";

export default class Props extends Component {
    render() {
        var propsSet = {
            'title': '首页',
            'leftshow': false,
            'rightShow': true
        }

        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title='首页' {...propsSet}></Navbar>
                </div>

                {/*<div>*/}
                {/*    <h2>列表</h2>*/}
                {/*    <Navbar title='列表' leftshow={true}></Navbar>*/}
                {/*</div>*/}

                {/*<div>*/}
                {/*    <h2>购物车</h2>*/}
                {/*    <Navbar title='购物车' leftshow={true}></Navbar>*/}
                {/*</div>*/}
            </div>
        )
    }
}