import React, {Component} from 'react';
import './css/04-css.css'

export default class App extends Component {
    myref = React.createRef()

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], ...this.state.list]
                    })
                }}>来10封邮件
                </button>
                <h1>邮箱应用</h1>
                <div ref={this.myref} style={{height: "200px", overflow: "auto"}}>
                    <ul>
                        {
                            this.state.list.map((item, index) => <li key={item} style={{
                                height: "40px",
                                background: "yellow"
                            }}>{item}</li>)
                        }
                    </ul>
                </div>

            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        //获取容器高度
        console.log("getSnapshotBeforeUpdate,记录未更新前的容器高度：" + this.myref.current.scrollHeight)
        return this.myref.current.scrollHeight
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate,记录已更新前的容器高度：" + this.myref.current.scrollHeight)
        this.myref.current.scrollTop += this.myref.current.scrollHeight - snapshot
    }
}