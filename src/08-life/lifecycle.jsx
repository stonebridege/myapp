import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    state = {
        opacity: 1,
    };
    /**
     * 把组件挂载(mount)在页面上,即将组件放在页面上
     * unmountComponentAtNode()方法：把组件从页面上卸载(unmount)，即将组件从页面删除
     */
    handleUnmount = () => {
        //通过unmountComponentAtNode方法将指定组件从页面卸载
        const targetNode = document.getElementById('target-node');
        ReactDOM.unmountComponentAtNode(targetNode);
        targetNode.remove();
        //清除定时器
        clearInterval(this.timer)
    };


    componentDidMount() {
        //如果在render()中设置定时器，每次定时器调用结束，就会改变state，页面重新渲染，就会再调用render()中设置状态的操作。陷入死循环。
        setInterval(() => {
            //1.获取原状态opacity
            let {opacity} = this.state
            //2.将opacity减少0.1
            opacity -= 0.1
            //3.判断opacity是否为复数
            if (opacity <= 0) opacity = 1
            //4.将opcity设置回state
            this.setState({opacity})
        }, 200);
    }


    // 组件将要卸载时调用
    componentWillUnmount() {
        //清除定时器
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <div id="target-node">
                    <h1 style={{opacity: this.state.opacity}}>Hello, World!</h1>
                    <button onClick={this.handleUnmount}>Unmount</button>
                </div>
            </div>
        );
    }
}

