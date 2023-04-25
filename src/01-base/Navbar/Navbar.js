import React, {Component} from "react";

export default class Navbar extends Component {
    //属性是父组件传递过来，通过this.props接收
    render() {
        console.log(this.props)
        let {title, leftShow, rightShow} = this.props
        return (
            <div>
                {leftShow && <button>返回</button>}
                navbar--{title}
                {rightShow && <button>home</button>}
            </div>
        )
    }
}