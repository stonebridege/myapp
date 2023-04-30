import React, {Component} from 'react';

/**
 * 无状态组件Navbar
 */
export default class Navbar extends Component {
    render() {
        return (
            <div style={{background: 'yellow'}}>
                <button style={{float: 'left'}}>back</button>
                <span>卖座电影</span>
                {/*1.当点击center按钮时，触发this.props.event函数，由父组件修改current值*/}
                <button style={{float: 'right'}} onClick={() => {
                    this.props.event(2)
                }}>center
                </button>
            </div>
        );
    }
}