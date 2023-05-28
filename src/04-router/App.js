import React, {Component} from 'react'
import MRouter from './router/IndexRouter'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 引入路由模块 */}
                <MRouter></MRouter>
            </div>
        )
    }
}