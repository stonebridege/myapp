import React, {Component} from 'react';
import axios from "axios";
import './css/03-communication.css'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            filmList: [],
            info: ''
        }
    }

    componentDidMount() {
        axios.get(`/test.json`).then(res => {
            this.setState({
                filmList: res.data.data.films
            }, () => {
                console.log(res.data.data.films)
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.filmList.map(item =>
                        <FilmItem key={item.filmId} {...item} onEvent={(value) => {
                            console.log("父组件接收", value)
                            this.setState({
                                info: value
                            })
                        }}></FilmItem>
                    )
                }
                <FilmDetail info={this.state.info}></FilmDetail>
            </div>
        );
    }
}

class FilmItem extends Component {
    render() {
        let {name, poster, grade, synopsis} = this.props
        return (
            <div className='filmitem' onClick={() => {
                this.props.onEvent(synopsis)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <div>关注评分：{grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div className='filmDetail'>
                {this.props.info}
            </div>
        )
    }
}