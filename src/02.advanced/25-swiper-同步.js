import React, {Component} from 'react';
import Swiper, {Navigation, Pagination} from "swiper";
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation, Pagination])

export default class App extends Component {
    state = {
        list: ["111", "222", "333"]
    }

    componentDidMount() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }

    render() {
        return (
            <div>
                <div className="swiper">
                    <div className="swiper-wrapper" style={{height: '200px', background: 'yellow'}}>
                        {
                            this.state.list.map((item, index) => <div className='swiper-slide' key={item}>{item}</div>)
                        }
                    </div>
                    {/*如果需要分页器 */}
                    <div className="swiper-pagination"></div>

                    {/*如果需要导航按钮*/}
                    {/*<div className="swiper-button-prev"></div>*/}
                    {/*<div className="swiper-button-next"></div>*/}

                    {/*如果需要滚动条*/}
                    {/*<div className="swiper-scrollbar"></div>*/}
                </div>
            </div>
        );
    }
}
