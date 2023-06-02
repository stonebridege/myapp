import React, {Component} from 'react'
import MRouter from './router/IndexRouter'
import Tabbar from './components/Tabbar'
import './views/css/App.css'
import store from "./redux/store";

export default class App extends Component {
    state = {
        isShow: store.getState().show
    }

    /**
     * 1.组件加载完成后获取状态：通过 Redux的store.getState() 方法获取当前的状态,
     * 并将其设置到组件状态中
     */
    componentDidMount() {
        store.subscribe(() => {
            console.log("app订阅", store.getState().show)
            this.setState({
                isShow: store.getState().TabbarReducer.show
            })
        })
    }

    render() {
        return (
            <div>
                {/* 2.如果来源于Redux的store.getState()数据改变，则会影响state，然后影响页面*/}
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}
