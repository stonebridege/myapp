import React, {Component} from "react";

export default class App extends Component {
    // 1.定义createRef对象
    username = React.createRef()

    render() {
        return (
            <div>
                {/*2.在标签中引入createRef对象*/}
                <input ref={this.username}/>
                <button onClick={(() => {
                    // 3.获取标签中输入的值
                    console.log("click1", this.username.current, this.username.current.value);
                })}>button1
                </button>
            </div>
        )
    }
}
