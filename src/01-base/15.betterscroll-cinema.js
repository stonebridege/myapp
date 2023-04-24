import React, {Component} from "react";
import axios from "axios";
//1.引入better-scroll组件
import BetterScroll from "better-scroll";

export default class Cinema extends Component {
    constructor() {
        super();
        this.state = {
            cinemaList: [],
            backCinemaList: [],
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
                backCinemaList: res.data.data.cinemas
            }, () => {
                //3.当数据渲染成功后创建BetterScroll对象，指向上面的div
                new BetterScroll(".stonebridgewrapper")
            })
        }).catch(err => {
            console.error(err)
        })
    }


    render() {
        return (
            <div>
                <input type="text" onInput={this.handleInput}/>
                {/*2.按照better-scroll要求定义div将ul标签包裹起来，便于后续操作*/}
                <div className='stonebridgewrapper' style={{height: '400px', background: 'yellow', overflow: 'hidden'}}>
                    <div className='stonebridgecontent'>
                        {
                            this.state.cinemaList.map(item =>
                                <dl key={item.cinemaId}>
                                    <dt>{item.name}</dt>
                                    <dt>{item.address}</dt>
                                </dl>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }

    handleInput = (event) => {
        var newArr = this.state.backCinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        this.setState({
            cinemaList: newArr
        }, () => {
            //4.输入框输入筛选字符串完成筛选，当筛选后的数据设置进state,后创建BetterScroll对象，所以一定要在html渲染完成后实现
            new BetterScroll(".stonebridgewrapper")
            console.log(this.state.cinemaList)
        })
    }
}