import React, {Component} from 'react';
//1.引入Swiper核心组件和Navigation
import Swiper, {Navigation, Pagination} from "swiper";
//2.引入Swiper的css
import 'swiper/swiper-bundle.css'
//3.使用 Swiper库或插件Navigation，Pagination
Swiper.use([Navigation, Pagination])

export default class App extends Component {
    //4.此时数据是空，后续加载
    state = {
        list: []
    }

    //5.组件挂载到DOM上之后所执行的componentDidMount函数
    //通过定时器更新数据
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["aaa", "bbbb", "cccc"]
            })
        }, 2000)
    }

    //6.在组件更新（重新渲染）之后被调用。它在首次渲染后不会被触发，只有在组件的 props或state发生变化，导致组件重新渲染时才会被调用。
    //componentDidMount中通过定时器更新数据，然后在componentDidUpdate。
    //初始化swiper对象(className=swiper)，并设置pagination分页（className=swiper-pagination）
    componentDidUpdate(prevProps, prevState, snapshot) {
        new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }

    render() {
        return (
            <div>
                {/*7.html构造要符合官网要求*/}
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
