import React, {Component} from 'react'
import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import {Redirect, Route, Switch} from 'react-router-dom'

export default class Films extends Component {
    render() {
        return (
            <div>
                <div style={{height: "200px", background: "yellow"}}>大轮播</div>
                <div>导航栏</div>
                {/* 路由配置嵌套路由 */}
                <Switch>
                    {/*1.访问http://ip:port/#/films/nowplaying时，页面指定位置加载Nowplaying组件*/}
                    <Route path="/films/nowplaying" component={Nowplaying}/>
                    {/*2.访问http://ip:port/#/films/comingsoon时，页面指定位置加载Comingsoon组件*/}
                    <Route path="/films/comingsoon" component={Comingsoon}/>
                    {/*3.访问http://ip:port/#/films*时，默认加载nowplaying组件*/}
                    <Redirect from="/films" to="/films/nowplaying"/>
                </Switch>
            </div>
        )
    }
}
