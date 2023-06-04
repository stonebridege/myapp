import React, {Component} from 'react';
import qs from 'querystring'

let obj = {name: 'tom', age: '18'}
console.log(qs.stringify(obj)) //name=tom&age=18

let str = 'carName=阿斯顿马丁&price=199'
console.log(qs.parse(str))//{carName: '阿斯顿马丁', price: '199'}

let search = '?carName=阿斯顿马丁&price=199'
console.log(qs.parse(search.slice(1)))//{carName: '阿斯顿马丁', price: '199'}

const DetailData = [
    {id: '01', content: 'hello，Vancouver'},
    {id: '02', content: 'hello，BC'},
    {id: '03', content: 'hello，Canada'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props);
        // 传递params参数的方式：接收参数
        // const {id, title} = this.props.match.params

        //接收search参数
        // const {id, title} = qs.parse((this.props.location.search).slice(1))

        //接收state参数
        const {id, title} = this.props.location.state || {}
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        }) || {}


        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}