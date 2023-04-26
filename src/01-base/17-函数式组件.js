import React, {Component} from 'react';
import Sidebar from "./Sidebar/Sidebar";

export default class App extends Component {
    render() {
        return (
            <div>
                {/*函数式组件*/}
                <Sidebar bg="yellow" position="left"></Sidebar>
            </div>
        );
    }
}