import React, {Component} from "react";
//1.引入better-scroll组件
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                {/*2.按照better-scroll要求定义div将ul标签包裹起来，便于后续操作*/}
                <div className='stonebridgewrapper' style={{height: '200px', background: 'yellow', overflow: 'hidden'}}>
                    <ul className='stonebridgecontent'>
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }

    getData() {
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
        this.setState({
                list: list
            }, () => {
            //3.当数据渲染成功后创建BetterScroll对象，指向上面的div
                // console.log(this.state.list)
                // new BetterScroll(".stonebridgewrapper")
            }
        )
        setTimeout(() => {
            new BetterScroll(".stonebridgewrapper")
        }, 0)
    }
}