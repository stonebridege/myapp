import React, {Component} from "react";

export default class App extends Component {
    state = {
        list: ["111", "23333", "33333333333"]
    }

    render() {
        return (
            <div>
                <ul>
                    {/*{this.listForList()}*/}
                    {this.state.list.map(item => <li key={item}>{item}</li>)}
                    {this.state.list.map((item,index) => <li key={item}>{item}--->{index}</li>)}
                </ul>
            </div>
        )
    }

    listForList = () => {
        var list = ["aaaa", "bbbbb", "cccccc"]
        var newlist = list.map(item => `<li>${item}</li>`)
        console.log(newlist.join(''))
    }


}

