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

/*
 store.dispatch
 store.subscrbe
 store.getState
*/

/*
自定义createKerwinStore实现redux的功能
 */
function createKerwinStore(reducer) {
    //1.list用于保存每个订阅者通过subscribe传递过来的方法的代码
    var list = []
    //2.state用于保存状态的值，第一次时注意，第二个参数action为空，所以默认保存初始值，
    // 即const reducer = (prevState = initialState, action)的initialState值
    var state = reducer(undefined, {})

    //3.订阅方法，订阅者将其回调参数传递过来，会在dispatch时触发这些回调参数，在回调函数中通过getState() 方法获取状态。
    // 这个方法会在用于监听状态变化的地方使用
    function subscribe(callback) {
        list.push(callback)
    }

    //4.发布函数，当需要改变状态时触发，根据传递来的action和原状态state执行reducer，改变state。
    // 然后该函数调用所以的订阅者传递过来的回调函数
    function dispatch(action) {
        //5.此时根据传递来的action和原状态state执行reducer，改变state
        state = reducer(state, action)
        for (var i in list) {
            list[i] && list[i]()
        }
    }

    //5.获取getState()，一般会在订阅者的回调函数中调用
    function getState() {
        return state
    }

    //6.返回createKerwinStore对象
    return {
        subscribe,
        dispatch,
        getState
    }
}

export default store