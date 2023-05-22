import React, {Component} from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {this.setState({type: 1 })}}>正在热映</li>
                    <li onClick={() => {this.setState({type: 2 })}}>即将上映</li>
                </ul>

                <FilmList type={this.state.type}></FilmList>
            </div>
        )
    }
}


class FilmList extends Component {
    state = {
        list: [],
        type: 1
    }

    //初始化-执行一次
    componentDidMount() {
        this.request()
    }

    /**
     * 1.在生命周期函数getDerivedStateFromProps中无法发起异步请求，因为return会立即执行，不会等待ajax返回；也无法进行this.setState{}的操作，因为拿不到this。
     * 所以getDerivedStateFromProps取代componentWillReceiveProps是需要配合componentDidUpdate完成。
     * @param nextProps
     * @param nextState
     * @returns {{type}}
     */
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDrivedStateFromProps", nextProps)
        return {
            type: nextProps.type
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.type, prevState.type)
        //2.进行type判断，如果type更新了，则发送ajax请求，如果type没有变则不发送ajax请求;如果重复点击也不会重复更新。
        if (this.state.type === prevState.type) {
            return
        } else {
            this.request()
        }
    }

    request() {
        if (this.state.type === 1) {
            console.log("请求卖座正在热映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6369301",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            console.log("请求卖座即将上映的数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8077848",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    render() {
        return <ul>
            {this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)}
        </ul>
    }
}