import React, {Component} from 'react'
import axios from 'axios'
import './css/03-communination.css'


//调度中心
var bus = {

    list: [],
    //订阅
    subscribe(callback) {
        this.list.push(callback)
    },

    //发布
    publish(text) {
        //遍历所有的list， 将回调函数执行
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}


export default class App extends Component {
    constructor() {
        super()
        this.state = {
            filmList: [],
        }
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.filmId} {...item} ></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        )
    }
}

/*受控组件*/
class FilmItem extends Component {
    render() {
        let {name, poster, grade, synopsis} = this.props
        return <div className="filmitem" onClick={() => {
            /**
             * 2.FilmItem中当点击item触发publish()完成发布，将数据传递到调度中心，
             * 并触发调度者的回调函数，将参数传递给回调函数
             */
            bus.publish(synopsis)
        }}>
            <img src={poster} alt={name}/>
            <h4>{name}</h4>
            <div>观众评分：{grade}</div>
        </div>
    }
}

class FilmDetail extends Component {
    constructor() {
        super()
        this.state = {
            info: ""
        }
        /**
         * 1.在FilmDetail完成订阅，设置回调函数，当被发布者触发时，
         * 将接收的参数设置到state中并在页面中完成渲染。
         */
        bus.subscribe((info) => {
            console.log("我再filmDetail中定义", info)
            this.setState({
                info: info
            })
        })
    }

    render() {
        return <div className="filmdetail">
            {this.state.info}
        </div>
    }
}