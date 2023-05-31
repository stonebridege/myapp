import React, {Component} from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Films from '../views/Films'
import Detail from '../views/Detail'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Comingsoon from "../views/films/Comingsoon";

//2.判断是否存在token
function isAuth() {
    return true
}

// BrowserRouter 没有#的路径，好看 ，真正朝后端发请求要页面，后端没有对应的路径处理路径， 就会404， 不好看。
export default class IndexRouter extends Component {
    render() {
        return (
            <Router>
                {this.props.children}
                <Switch>
                    <Route path="/films" component={Films}/>

                    {/* <Route path="/films/nowplaying" component={Nowplaying}/> */}

                    <Route path="/cinemas" component={Cinemas}/>
                    {/* <Route path="/center" component={Center} /> */}
                    {/*3.在render里通过判断是否进入center页面，否则通过Redirect重定向到login*/}
                    <Route path="/center" render={(props) => {
                        console.log(props)
                        return isAuth() ? <Center {...props}/> : <Redirect to="/login"/>
                    }}/>

                    {/*1.设置login路由*/}
                    <Route path="/login" component={Login}/>
                    {/* /detail/1111  动态路由 */}
                    <Route path="/detail/:myid" component={Detail}/>
                    <Route path="/comingson" component={Comingsoon}/>
                    {/* <Route path="/detail" component={Detail} /> */}
                    {/* 模糊匹配 */}
                    <Redirect from="/" to="/films" exact/>
                    {/* 精确匹配  exact */}
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}