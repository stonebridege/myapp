import {createStore} from 'redux';

// 1.定义初始状态
const initialState = {
    show: true,
};

/**
 * 2.创建reducer对象，该对象用于完成当《应用程序状态》改变时触发，即dispatch分发 action时触发；
 * 并且将reducer对象作为参数用于创建store对象
 * @param prevState ：保存<应用程序状态>的名称，通过prevState = initialState初始化
 * @param action ：dispatch分发action
 * @returns {{show: boolean}} 返回改变后的值，会被赋值给prevState
 */
const reducer = (prevState = initialState, action) => {
    console.log("prevState:", prevState)
    console.log("action:", action)
    //3.不可以直接修改prevState，要深拷贝一份后修改，再返回，就会被赋值给prevState
    let newState = {...prevState}
    //4.根据dispatch分发 action时传递来的数据进行prevState的修改并返回
    switch (action.type) {
        case "hide-tabbar":
            newState.show = false
            return newState
        case "show-tabbar":
            newState.show = true
            return newState
        default:
            return prevState
    }
}

/**
 * 创建store对象，将reducer对象作为参数
 * @type {Store<unknown, Action>}
 */
const store = createStore(reducer);

export default store