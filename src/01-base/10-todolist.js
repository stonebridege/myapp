import React, {Component} from "react";
import './css/01-index.css'

export default class App extends Component {
    //1.定义定义createRef对象
    toDodeTail = React.createRef();
    //2.定义状态存储tolist的临时数据
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
                {/*3.在标签中引入createRef对象*/}
                <input ref={this.toDodeTail}/>
                {/*4.对用户输入的值进行保存操作，更新到state中。*/}
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {
                        //5.使用原生JS遍历state.list对象
                        this.state.list.map((item, index) =>
                            <li key={item.id}>{/*{item.myText}*/}
                                {/*6.渲染富文本（如包含 HTML 标签、样式等）*/}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.myText
                                    }
                                }></span>
                                {/*7.通过bind函数修正this，且把该项的索引(index)传参，进行后续修改*/}
                                {/*<button onClick={this.delClick.bind(this, index)}>delete</button>*/}
                                {/*8.通过箭头函数中调用其他函数方式，可以传值，便于后续修改*/}
                                <button onClick={() => this.delClick(index)}>delete</button>
                            </li>
                        )
                    }
                </ul>
                {/*9.条件渲染*/}
                {/*9.1.条件渲染方式1：条件满足就会创建div片段*/}
                {/*{this.state.list.length === 0 ? <div>暂无待办事件</div> : null}*/}
                {/*9.2.条件渲染方式2：条件满足就会创建div片段*/}
                {this.state.list.length === 0 && <div>暂无待办事件</div>}
                {/*9.3.条件渲染方式2：条件满足就会显示div片段，否则就会隐藏*/}
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事件</div>
            </div>
        )
    }

    /**
     * 4.对用户输入的值进行保存操作，更新到state中。
     */
    handleClick = () => {
        // 4.1.深拷贝state里的值
        let newList = [...this.state.list]
        //4.2.不要直接修改状态，可能会造成不可预期的问题，修改深拷贝的数据再对state进行更新
        newList.push({
            id: Math.random() * 100000,
            myText: this.toDodeTail.current.value
        })
        //4.3.使用setState对state进行更新
        this.setState({
            list: newList
        })
        //4.4.清空输入框数据
        this.toDodeTail.current.value = ""
    }

    /**
     * 9.用户点击删除后,将数据从state中移除,完成修改
     * @param index
     */
    delClick = (index) => {
        // 9.1.深拷贝state里的值
        let newList = this.state.list.slice()
        // 9.2.使用splice(起始索引,删除数量)删除数据中的值
        newList.splice(index, 1)
        // 9.3.使用setState对state进行更新
        this.setState({
            list: newList
        })
    }
}

