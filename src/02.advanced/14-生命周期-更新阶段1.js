import React, {Component} from 'react';

export default class App extends Component {
    state = {
        myName: "Stone bridge"
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myName: "张三"
                    })
                }}>click
                </button>
                {this.state.myName}
                <span id="myname">{this.state.myName}</span>
                <div></div>
            </div>
        );
    }

    componentWillUpdate() {
        console.log("componentWillUpdate", document.getElementById("myname").innerHTML)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", document.getElementById("myname").innerHTML)
    }

}
