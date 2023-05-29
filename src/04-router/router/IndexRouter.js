import React, {Component} from 'react'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import Films from '../views/Films'
import Detail from '../views/Detail'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
export default class IndexRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/*一级路由执行films组件，一定不能使用exact*/}
                    <Route path="/films" component={Films}/>
                    <Route path="/detail/:myid" component={Detail}/>
                    <Route path="/cinemas" component={Cinemas}/>
                    <Route path="/center" component={Center}/>
                    {/* 模糊匹配 */}
                    <Redirect from="/" to="/films" exact/>
                    {/* 精确匹配  exact */}
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }
}
