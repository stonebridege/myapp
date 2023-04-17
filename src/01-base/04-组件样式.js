import React, {Component} from "react";
import './css/01-index.css' //导入css模块, webpack支持把css里面的内容做成一个内部样式，加在style标签中
export default class App extends Component {
    render() {
        var myName = "stonebridge"
        var obj = {
            backgroundColor: 'yellow',
            fontSize: '50px',
        }
        return (<div>
            {10 + 30}-{myName}<br/>
            {10 > 30 ? '111' : '222'}
            <div style={obj}>123456</div>
            <div style={{background: 'black'}}>123456</div>
            <div className="active">3333333333333</div>
            <div id="myApp">5555555556666666666666666666</div>

            <label htmlFor="userName">用户名</label>
            <input type="text" id="userName"/>
        </div>)
    }
}