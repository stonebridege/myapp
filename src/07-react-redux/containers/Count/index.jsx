import React, {Component} from 'react'
//引入action
import {
    decrement,
    increment,
    incrementAsync
} from "../../redux/actions/count";
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//定义UI组件
class Count extends Component {
    //加法
    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value * 1)
    }
    /**
     * decrement()来源于容器组件的mapDispatchToProps方法
     */
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value * 1)
    }
    /**
     * increment()来源于容器组件的mapDispatchToProps方法
     * count来源于容器组件的mapStateToProps方法
     */
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    /**
     * 异步incrementAsync()来源于容器组件的mapDispatchToProps方法
     */
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value * 1, 1000)
    }

    render() {
        //console.log('UI组件接收到的props是',this.props);
        return (
            <div>
                {/*'UI组件接收到的props是',this.props.count*/}
                <h1>当前求和为：{this.props.count},下方组件的总人数为:{this.props.countPerson}</h1>
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
                <ul>
                    {
                        this.props.persons.map((item => {
                            return <li key={item.id}>{item.name}----{item.age}</li>
                        }))
                    }
                </ul>
            </div>
        )
    }
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
    //从redux中的存储状态的map中获取指定的状态，其key为配置reducer时的状态。
    state => ({
        count: state.count,
        persons: state.persons,
        countPerson: state.persons.length
    }),
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count)
