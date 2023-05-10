import React, {Component} from 'react';

export default class App extends Component {
    state = {
        myName: "stone bridge"
    }

    componentWillMount() {
        console.log("第一次will mount", this.state.myname, document.getElementById("myName"))
        this.setState({
            myName: "Kerwin"
        })
    }

    componentDidMount() {
        console.log("第一次did mount", document.getElementById("myName"))
    }

    render() {
        console.log("render")
        return (
            <div>
                <span id="myName">{this.state.myName}</span>
            </div>
        )
    }
}