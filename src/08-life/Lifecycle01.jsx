import React, {Component} from 'react';

export default class App extends Component {
    //初始化状态
    state = {count: 0}

    //+1按钮的回调
    add = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h2>当前求和为：{count}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}
