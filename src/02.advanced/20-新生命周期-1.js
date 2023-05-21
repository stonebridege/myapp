import React, {Component} from 'react';

export default class App extends Component {
    state = {
        myName: "zhangsan",
        age: 11
    }

    /**
     *
     * @param nextProps :原先的Props
     * @param nextState :原先的State
     * @returns {{myName: string}}
     */
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps;nextState:", nextState.myName)
        //返回的数据会和state里的数据合并
        return {
            myName: "stonebridge"
        };
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "xiaoming",
                        age: 8888
                    })
                }}>click
                </button>
                app-{this.state.myName}-{this.state.age}
            </div>
        );
    }
}