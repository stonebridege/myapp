import React, {Component} from 'react';
//1.引入Swiper核心组件和Navigation
import Swiper, {Navigation, Pagination} from "swiper";
//2.引入Swiper的css
import 'swiper/swiper-bundle.min.css'
//3.使用 Swiper库或插件Navigation，Pagination
Swiper.use([Navigation, Pagination])

export default class KSwiper extends Component {

    //5.组件挂载到DOM上之后所执行的componentDidMount函数
    //初始化swiper对象(className=swiper)，并设置pagination分页（className=swiper-pagination）
    componentDidMount() {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true
        })
    }

    render() {
        return (
            <div>
                {/*6.html构造要符合官网要求,通过插槽把位置预留给使用者。*/}
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                    {/*7.设置分页器 */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
