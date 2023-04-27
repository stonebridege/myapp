import React, {Component} from "react";
import axios from "axios";

export default class Cinema extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cinemaList: [],
            myText: '',
        }

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
            })
        })
    }


    render() {
        return (
            <div>
                {/*1.当用户在输入框输入值，发生改变触发onChange，通过setState改变setState，改变了myText。导致render函数重新执行。*/}
                {/*2.render函数重新渲染导致 2.1.页面输入框的值发生了改变，2.2.触发了getCinemaList*/}
                {/*3.getCinemaList执行就会筛选出符合条件的值，将筛选的值返回并完成渲染*/}
                <input type="text" value={this.state.myText} onChange={(evt) => {
                    this.setState({
                        myText: evt.target.value
                    })
                }}/>
                {
                    this.getCinemaList().map(item =>
                        <dl key={item.cinemaId}>
                            <dt>{item.name}</dt>
                            <dt>{item.address}</dt>
                        </dl>
                    )
                }
            </div>
        )
    }

    getCinemaList() {
        return this.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.state.myText.toUpperCase()) || item.address.toUpperCase().includes(this.state.myText.toUpperCase()))
    }
}