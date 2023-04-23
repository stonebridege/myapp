import React, {Component} from "react";
//1.先引入axios库
import axios from "axios";

export default class Cinema extends Component {
    //2.在constructor中定义所需数据
    constructor() {
        super();
        //2.1.定义state用于存储所需数据
        this.state = {
            //2.1.1.保存每次过滤后的数据
            cinemaList: [],
            //2.1.2.保存从后台获取的原始数据，每次筛选都会里面筛选
            backCinemaList: [],
        }


        //2.2.通过axios获取后端数据
        axios({
            // 2.2.1.设置url
            url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=6939037",
            // 2.2.2.设置请求方式
            method: "get",
            // 2.2.3.设置请求头
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16821403713477519055454209"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            //2.2.4.成功获取数据，对数据进行保存
            console.log(res.data)
            this.setState({
                cinemaList: res.data.data.cinemas,
                backCinemaList: res.data.data.cinemas
            }, () => {
                //2.2.5.保存好后对State数据进行查看，因为setState是异步的
                console.log(this.state.cinemaList)
            })
        }).catch(err => {
            //2.2.6.如果有异常打印错误信息
            console.error(err)
        })
    }


    render() {
        return (
            <div>
                {/*3.设置输入框，当用户输入数据时触发handleInput函数*/}
                <input type="text" onInput={this.handleInput}/>
                {
                    // 4.渲染cinemaList数据，设置key，显示name和address
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

    /**
     * 5.用户输入时触发该函数，根据用户输入信息，使用filter和includes函数过滤符合要求的数据保存到cinemaList，然后react自行渲染
     * @param event
     */
    handleInput = (event) => {
        var newArr = this.state.backCinemaList.filter(item => item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        this.setState({
            cinemaList: newArr
        })
    }
}