import React, {Component} from 'react';

export default class App extends Component {
    state = {
        mytext: "1111"
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {this.setState({myText: "222222"})}}>click</button>
                {this.state.myText}
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate，snapshot：" + snapshot)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return 100;
    }
}
