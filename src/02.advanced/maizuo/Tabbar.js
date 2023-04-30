import React, {Component} from 'react';

export default class Tabbar extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "电影"
            },
            {
                id: 2,
                text: "影院"
            },
            {
                id: 3,
                text: "我的"
            },
        ],
        current: this.props.parentcurrent
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        // 3.渲染选项卡内的内容
                        this.state.list.map((item, index) =>
                            <li onClick={() => this.handleClick(index)}
                                className={this.state.current === index ? 'active' : ''}
                                key={item.id}>{item.text}</li>
                        )
                    }
                </ul>
            </div>
        );
    }

    handleClick = (index) => {
        this.setState({
            current: index
        })
        // 通知父组件修改页面
        this.props.event(index)
    }
}
