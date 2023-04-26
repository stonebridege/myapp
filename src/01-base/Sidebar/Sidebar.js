import React from "react";
//1.引入prop-types进行属性校验
import PropTypes from 'prop-types'

/**
 * 定义一个函数式组件
 * @param props :2.通过形参接收来自父组件的参数
 * @returns {JSX.Element}
 * @constructor
 */
export default function Sidebar(props) {
    console.log(props)
    //3.解析参数
    let {bg, position} = props

    var obj1 = {
        left: 0
    }
    var obj2 = {
        right: 0
    }
    var obj = {
        background: bg,
        width: "200px",
        position: "fixed"
    }
    //4.根据需求合并对象，并使用
    var styleObj = position === 'left' ? {...obj, ...obj1} : {...obj, ...obj2}
    console.log(styleObj)
    return (
        <div style={styleObj}>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
    )
}
// 5.定义属性的校验要求
Sidebar.propTypes = {
    bg: PropTypes.string,
    position: PropTypes.string,
}
// 6.设置属性的默认值
Sidebar.defaultProps = {
    bg: 'blue',
    position: 'right',
}