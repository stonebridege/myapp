import React, {Component} from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";
import './Tabble.css'

export default class Tabbar extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {/* <a href="#/films"></a> */}
                        <NavLink to="/films" activeClassName="kerwinactive">电影</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cinemas" activeClassName="kerwinactive">影院</NavLink>
                    </li>
                    <li>
                        <NavLink to="/center" activeClassName="kerwinactive">我的</NavLink>
                    </li>
                    <li>
                        <NavLink to="/comingson" activeClassName="kerwinactive">即将上映</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
