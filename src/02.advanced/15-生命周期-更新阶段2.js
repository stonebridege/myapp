import React, {Component} from 'react';

export default class App extends Component {
    state = {
        myName: "kerwin"
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myName: "stonebridge"
                    })
                }}>click
                </button>

                {this.state.myName}
            </div>
        );
    }

    /**
     * 在这里进行判断，如果老状态不不同于新状态就更新。减少无效的虚拟dom的对比，提高react的性能，
     * @param nextProps :最新的 props，老属性来自this.props
     * @param nextState :最新的 state，老状态来自this.state
     * @param nextContext
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            return true;
        } else {
            return false;
        }
    }

    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("UNSAFE_componentWillUpdate")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }
}
