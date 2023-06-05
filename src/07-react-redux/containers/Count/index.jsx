import React, {Component} from 'react'
//引入action
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/actions/count";
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {
    //加法
    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value * 1)
    }
    /**
     * jian()来源于容器组件的mapDispatchToProps方法
     */
    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value * 1)
    }
    /**
     * jia()来源于容器组件的mapDispatchToProps方法
     * count来源于容器组件的mapStateToProps方法
     */
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    /**
     * 异步AsyncJia()来源于容器组件的mapDispatchToProps方法
     */
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.AsyncJia(value * 1, 1000)
    }

    render() {
        //console.log('UI组件接收到的props是',this.props);
        return (
            <div>
                {/*'UI组件接收到的props是',this.props.count*/}
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
                &nbsp;
            </div>
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state => ({count: state}),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count)
