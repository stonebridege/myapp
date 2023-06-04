import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from "./Detail/Detail";

export default class News extends Component {
    state = {
        messageArr: [
            {id: "01", title: "消息1"},
            {id: "02", title: "消息2"},
            {id: "03", title: "消息3"}
        ]
    }

    // replace模式：传递params参数的方式
    // replaceShow = (id, title) => {
    //     this.props.history.replace(`/home/news/detail/${id}/${title}`)
    // }

    //push模式：传递params参数的方式
    // pushShow = (id, title) => {
    //     this.props.history.push(`/home/news/detail/${id}/${title}`)
    // }

    // replace模式：传递传递search参数的方式
    replaceShow = (id, title) => {
        this.props.history.replace(`/home/news/detail?id=${id}&title=${title}`)
    }

    //push模式：传递传递search参数的方式
    pushShow = (id, title) => {
        this.props.history.push(`/home/news/detail?id=${id}&title=${title}`)
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((item) => {
                            return (
                                <li key={item.id}>
                                    {/*传递params参数的方式：路由链接携带参数的方式*/}
                                    {/*<Link to={`/home/news/detail/${item.id}/${item.title}`}>{item.title}</Link>*/}

                                    {/*传递search参数的方式：路由链接需要携带参数*/}
                                    <Link to={`/home/news/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>

                                    {/*传递state参数的方式：路由链接无需要携带参数*/}
                                    {/*<Link to={{pathname: '/home/news/detail', state: {id: item.id, title: item.title}}}>{item.title}</Link>*/}

                                    &nbsp;
                                    <button onClick={() => this.pushShow(item.id, item.title)}>push查看</button>
                                    &nbsp;
                                    <button onClick={() => this.replaceShow(item.id, item.title)}>replace查看
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*传递params参数的方式：注册路由(声明接收)*/}
                {/*<Route path="/home/news/detail/:id/:title" component={Detail}></Route>*/}

                {/*传递search参数的方式：注册路由正常书写*/}
                <Route path="/home/news/detail" component={Detail}></Route>

                {/*传递state参数的方式：注册路由正常书写*/}
                {/*<Route path="/home/news/detail" component={Detail}></Route>*/}
            </div>
        )
    }
}
