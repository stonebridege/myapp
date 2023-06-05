import React, {Component} from 'react'
import {Button, DatePicker} from 'antd';
import {WechatOutlined, WeiboOutlined} from '@ant-design/icons'

export default class App extends Component {
    onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    render() {
        return (
            <div>
                <Button type="primary">主按钮</Button>
                <Button type="primary">点击</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <WechatOutlined/>
                <WeiboOutlined/>
                <DatePicker onChange={this.onChange}/>
                <DatePicker onChange={this.onChange} picker="week"/>
                <DatePicker onChange={this.onChange} picker="month"/>
                <DatePicker onChange={this.onChange} picker="quarter"/>
                <DatePicker onChange={this.onChange} picker="year"/>

            </div>
        )
    }
}
