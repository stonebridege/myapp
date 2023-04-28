import React, {Component} from "react";
import './css/01-index.css'

export default class App extends Component {
    state = {
        list: [{
            id: 1,
            myText: "aaaa",
            isChecked: true
        }, {
            id: 2,
            myText: "bbb",
            isChecked: false
        }, {
            id: 3,
            myText: "ccc",
            isChecked: false
        },],
        myText: ''
    }

    render() {
        return (
            <div>
                {/*1.在state中设置myText，用于和input输入框的值绑定；当用户在输入框输入值，发生改变触发onChange*/}
                {/*通过setState改变setState，改变了myText。导致render函数重新执行。*/}
                <input type='text' value={this.state.myText} onChange={(evt) => {
                    this.setState({
                        myText: evt.target.value
                    })
                }}/>
                <button onClick={this.handleClick}>add</button>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/*2.render函数重新渲染导致checkbox选择框，也会因为state改变重新渲染，当改变单选框改变时触发handChecked函数*/}
                                <input type='checkbox' checked={item.isChecked} onChange={() => {
                                    this.handChecked(index)
                                }}/>
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.myText
                                    }
                                } style={{textDecoration: item.isChecked ? 'line-through' : ''}}></span>
                                <button onClick={() => this.delClick(index)}>delete</button>
                            </li>
                        )
                    }
                </ul>
                {this.state.list.length === 0 &&
                    <div>暂无待办事件</div>
                }
                <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事件</div>
            </div>
        )
    }

    handChecked = (index) => {
        //3.根据传递来的index找到this.state.list里的对象的isChecked属性，
        // 取反，通过setState设置state，render()重新完成渲染
        var newList = [...this.state.list]
        newList[index].isChecked = !newList[index].isChecked
        this.setState({
            list: newList
        })
    }


    handleClick = () => {
        let newList = [...this.state.list]
        newList.push({
            id: Math.random() * 100000,
            myText: this.state.myText
        })

        this.setState({
            list: newList,
            myText: ''
        })
    }

    delClick = (index) => {
        let newList = this.state.list.slice()
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
}

