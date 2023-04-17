import React, {Component} from "react";

export default class App extends Component {
    a = 1000

    render() {
        return (
            <div>
                <input type="text"/>
                {/*1.事件绑定方式1;这个匿名函数中的this和render()函数中的this一致,即类App的实例，可以访问到a的值*/}
                <button onClick={(() => {
                    console.log("click1", this.a)
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
                <button onClick={() => this.handleClick4()}>button-add4</button>
            </div>
        )
    }

    handleClick2() {
        console.log("handleClick2", this)  //handleClick2 undefined
    }

    handleClick3 = (evt) => {
        console.log("handleClick3", evt)
    }

    handleClick4() {
        console.log("handleClick4", this)  //handleClick2 undefined
    }
}


// call：可改变this，自动执行函数
// apply：可改变this，自动执行函数
// bind：可改变this，不会自动执行函数，可手动加括号执行函数。

var obj1 = {
    name: "obj1",
    getName() {
        console.log(this.name)
    }
}

var obj2 = {
    name: "obj2",
    getName() {
        console.log(this.name)
    }
}
obj1.getName.call(obj2)   //obj2
obj1.getName.apply(obj2)  //obj2
obj1.getName.bind(obj2)() //obj2
