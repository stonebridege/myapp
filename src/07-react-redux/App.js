import React, {Component} from 'react'
import Count from "./containers/Count";
import store from "./redux/store";

export default class App extends Component {

    render() {
        return (
            <div>
                {/*2.给react-redux的容器组件传递store*/}
                <Count store={store}></Count>
            </div>
        )
    }
}
