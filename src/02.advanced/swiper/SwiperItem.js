import React, {Component} from 'react';
//创建轮播组件的单个轮播模块的，为其设置正确的类名swiper-slide
export default class KSwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {this.props.children}
            </div>
        )
    }
}