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
                                    {/*<Link to={`/home/news/detail?id=${item.id}&title=${item.title}`}>{item.title}</Link>*/}

                                    {/*传递state参数的方式：路由链接无需要携带参数*/}
                                    <Link replace to={{pathname:'/home/news/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*传递params参数的方式：注册路由(声明接收)*/}
                {/*<Route path="/home/news/detail/:id/:title" component={Detail}></Route>*/}

                {/*传递search参数的方式：注册路由正常书写*/}
                {/*<Route path="/home/news/detail" component={Detail}></Route>*/}

                {/*传递state参数的方式：注册路由正常书写*/}
                <Route path="/home/news/detail" component={Detail}></Route>
            </div>
        )
    }
}
