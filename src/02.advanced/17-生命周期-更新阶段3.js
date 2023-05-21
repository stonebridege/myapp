import React, {Component} from 'react';

class Child extends Component {

    /**
     * @param nextProps :最新的 props，老属性来自this.props
     * @param nextContext
     * 最先获得父组件的属性，可以利用属性进行逻辑处理或者ajax处理等
     */
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps;最新的text：" + nextProps.text + ";原始的text：" + this.props.text)
        this.setState({
            title: "stonebridge" + nextProps.text
        }, () => {
            console.log(this.state.title);
        })
    }

    state = {
        title: "1111111"
    }

    render() {
        return <div>child</div>
    }
}

export default class App extends Component {
    state = {
        text: "1111111"
    }

    render() {
        return (
            <div>
                {
                    this.state.text
                }
                <button onClick={() => {
                    this.setState({
                        text: "2222222222222"
                    })
                }}>Click
                </button>
                <Child text={this.state.text}></Child>
            </div>
        );
    }
}