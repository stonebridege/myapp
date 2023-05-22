import React, {Component} from 'react';
import KSwiper from "./swiper/Swiper";
import SwiperItem from "./swiper/SwiperItem";
import axios from 'axios'
//1.使用者使用该组件
export default class App extends Component {
    state = {
        list: []
    }

    //2.组件挂载到DOM上之后所执行的componentDidMount函数,通过ajax获取数据
    componentDidMount() {
        axios.get(`/test.json`).then(res => {
            this.setState({
                list: res.data.data.films
            }, () => {
                console.log(res.data.data.films)
            })
        })
    }

    render() {
        return (
            <div>
                {/*使用轮播组件KSwiper；1.轮播组件预留插槽，使用SwiperItem渲染单个模块；2.通过loop设置是否循环*/}
                <KSwiper loop={true}>
                    {
                        this.state.list.map((item, index) =>
                            <SwiperItem key={item.filmId}>
                                <img src={item.poster}
                                     alt={item.name}
                                     style={{width: "30%"}}/>
                            </SwiperItem>
                        )
                    }
                </KSwiper>
            </div>
        );
    }
}