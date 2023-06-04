import React, {Component} from 'react';

const DetailData = [
    {id: '01', content: 'hello，Vancouver'},
    {id: '02', content: 'hello，BC'},
    {id: '03', content: 'hello，Canada'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 传递params参数的方式：接收参数
        const {id, title} = this.props.match.params
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}