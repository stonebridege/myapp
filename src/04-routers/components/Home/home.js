import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import News from "./News/News";
import Message from "./Message/Message";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home组件</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/*编写子路由链接*/}
                            <NavLink activeClassName='stonebridgeClass' className="list-group-item" to="/home/news">news</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='stonebridgeClass' className="list-group-item" to="/home/message">message</NavLink>
                        </li>
                    </ul>
                </div>
                <ul>
                    <Switch>
                        {/*注册子路由*/}
                        <Route path='/home/news' component={News}></Route>
                        <Route path='/home/message' component={Message}></Route>
                    </Switch>
                </ul>
            </div>
        );
    }
}

