import React, {Component} from 'react';
//1.引入Swiper核心组件和Navigation
import Swiper, {Navigation, Pagination} from "swiper";
//2.引入Swiper的css
import 'swiper/swiper-bundle.css'
//3.使用 Swiper库或插件Navigation，Pagination
Swiper.use([Navigation, Pagination])

export default class App extends Component {
    //4.此时数据是固定的
    state = {
        list: ["111", "222", "333"]
    }

    //5.组件挂载到DOM上之后所执行的componentDidMount函数
    //初始化swiper对象(className=swiper)，并设置pagination分页（className=swiper-pagination）
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
                {/*6.html构造要符合官网要求*/}
                <div className="swiper">
                    <div className="swiper-wrapper" style={{height: '200px', background: 'yellow'}}>
                        {
                            this.state.list.map((item, index) => <div className='swiper-slide' key={item}>{item}</div>)
                        }
                    </div>
                    {/*如果需要分页器 */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}
