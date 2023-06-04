import React, {Component} from 'react'
import {NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home/home'
import About from './components/About/about'

class App extends Component {
    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink activeClassName='stonebridgeClass' className="list-group-item"
                                     to="/about">About</NavLink>
                            <NavLink activeClassName='stonebridgeClass' className="list-group-item"
                                     to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    {/* 注册路由 */}
                                    <Route path="/about" component={About}/>
                                    <Route path="/home" component={Home}/>
                                    <Redirect to="/about"/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.back}>回退</button>
                    &nbsp;
                </div>
            </div>
        )
    }
}

export default withRouter(App)