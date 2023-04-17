import React, {Component} from "react";

export default class App extends Component {
    render() {
        return (
            <div>
                <input type="text"/>
                {/*1.事件绑定方式1*/}
                <button onClick={(() => {
                    console.log("click1")
                })}>button-add1
                </button>
                {/*2.绑定onMouseMove事件*/}
                <button onMouseMove={() => console.log("onMouseMove1")}>button-onMouseMove</button>
                <br/>
                {/*3.事件绑定方式2*/}
                <button onClick={this.handleClick2}>button-add2</button>
                {/*4.事件绑定方式3*/}
                <button onClick={this.handleClick3}>button-add3</button>
                {/*4.事件绑定方式4*/}
                <button onClick={() => {
                    this.handleClick2()
                }}>button-add4
                </button>
            </div>
        )
    }

    handleClick2() {
        console.log("handleClick2")
    }

    handleClick3 = () => {
        console.log("handleClick3")
    }
}