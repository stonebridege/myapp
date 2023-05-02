import React, {Component} from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                app
            </div>
        )
    }
}

/**
 * 1.设置调度中心，用于定义<订阅函数>和<发布函数>
 * @type {{subscribe(*): void, publish(*): void, list: *[]}}
 */
var bus = {

    //2.定义list保存定语订阅者通过subscribe函数传递来的回调函数，
    // 在发布者通过函数publish函数发布时触发这些回调函数
    list: [],
    /**
     * 3.订阅函数，由订阅者调用，将自身回调函数作为参数传递过来，
     * 将订阅者的回调函数保存在list中
     * @param callback 订阅者的回调函数
     */
    subscribe(callback) {
        //将订阅者的回调函数保存在list中
        this.list.push(callback)
    },

    /**
     * 4.发布函数，由发布者调用，遍历list中的所有回调函数，并将回调函数执行
     * @param text 发布函数传递来的参数，可以传递给通过回调函数出传递给订阅者
     */
    publish(text) {
        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}


/**
 * 5.订阅者调用subscribe()完成订阅，参数为一个函数，由发布者触发publish()时触发
 * 该函数的参数value为publish()执行时触发（完成将发布函数的参数传递到回调函数）
 */
bus.subscribe((value) => {
    console.log("第1次订阅subscribe，打印收到的参数：", value)
})

/**
 * 可以订阅多次
 */
bus.subscribe((value) => {
    console.log("第2次订阅subscribe，打印收到的参数：", value)
})


/**
 * 6.发布者触发publish(),并将参数传递过去，
 * 在publish()中将参数通过回调函数传递过去
 */
setTimeout(() => {
    console.log("第1次发布publish")
    bus.publish("男人看了沉默1111111111----------------")
}, 1000)

setTimeout(() => {
    console.log("第2次发布publish")
    bus.publish("男人看了沉默333333333----------------")
}, 2000)