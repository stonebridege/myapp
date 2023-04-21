import React, {Component} from "react";
import './css/01-index.css'

export default class App extends Component {
    toDodeTail = React.createRef();
    state = {
        list: [{
            id: 1,
            myText: "aaaa"
        }, {
            id: 2,
            myText: "bbb"
        }, {
            id: 3,
            myText: "ccc"
        },]
    }

    render() {
        return (
            <div>
                <input ref={this.toDodeTail}/>
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/*{item.myText}*/}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html:item.myText
                                    }
                                }></span>
                                {/*通过bind函数修正this，且把该项的索引(index)传参，进行后续修改*/}
                                {/*<button onClick={this.delClick.bind(this, index)}>delete</button>*/}
                                <button onClick={() => this.delClick(index)}>delete</button>
                            </li>
                        )
                    }
                </ul>
                {/*条件渲染方式1：条件满足就会创建div片段*/}
                {/*{this.state.list.length === 0 ? <div>暂无待办事件</div> : null}*/}
                {/*条件渲染方式2：条件满足就会创建div片段*/}
                {this.state.list.length === 0 && <div>暂无待办事件</div>}
                {/*条件渲染方式2：条件满足就会显示div片段，否则就会隐藏*/}
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事件</div>
            </div>
        )
    }

    delClick = (index) => {
        let newList = this.state.list.slice()
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }

    handleClick = () => {
        console.log(this.toDodeTail.current.value)
        let newList = [...this.state.list]
        //不要直接修改状态，可能会造成不可预期的问题
        newList.push({
            id: Math.random() * 100000,
            myText: this.toDodeTail.current.value
        })
        this.setState({
            list: newList
        })
        // 清空输入框数据
        this.toDodeTail.current.value = ""
    }
}

