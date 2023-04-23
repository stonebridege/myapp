import React, {Component} from "react";
//1.先引入axios库
import axios from "axios";

export default class Cinema extends Component {
    constructor() {
        super();
        this.state = {
            cinemaList: [],
            backCinemaList: [],
        }

        // axios.get("https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=6939037").then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.error(err)
        // })
        //2.通过axios获取后端数据
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=6939037",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16821403713477519055454209"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            console.log(res.data)
            this.setState({
                cinemaList: res.data.data.cinemas,
                backCinemaList: res.data.data.cinemas
            }, () => {
                console.log(this.state.cinemaList)
            })
        }).catch(err => {
            console.error(err)

        })
    }


    render() {
        return (
            <div>
                <input type="text" onInput={this.handleInput}/>
                {
                    this.state.cinemaList.map(item =>
                        <dl key={item.cinemaId}>
                            <dt>
                                {item.name}
                            </dt>
                            <dt>
                                {item.address}
                            </dt>
                        </dl>
                    )
                }
            </div>
        )
    }

    handleInput = (event) => {
        console.log(event.target.value)
        var newArr = this.state.backCinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        console.log(newArr)
        this.setState({
            cinemaList: newArr
        })
    }
}

// var arr = ["aaaa", "abc", "bccc"]
// var newArr = arr.filter(item => item.includes("b"))
// console.log(newArr)
