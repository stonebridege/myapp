import React, {Component} from "react";
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    // 类属性，和对象属性相对
    static propTypes = {
        title: PropTypes.string,
        leftShow: PropTypes.bool,
        rightShow: PropTypes.bool
    }
    static defaultProps = {
        title: "默认的myname",
        isShow: true
    }

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
