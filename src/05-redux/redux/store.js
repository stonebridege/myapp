import {applyMiddleware, combineReducers, createStore} from 'redux';
import CityReducer from "../reducers/CityReducer";
import TabbarReducer from "../reducers/TabbarReducer";
import CinemaListReducer from "../reducers/CinemaListReducer";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise"


/**
 * 创建store对象，通过combineReducers将CityReducer，TabbarReducer对象合并为一个reducer
 * @type {Reducer<CombinedState<unknown>>}
 */
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})

const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise));

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