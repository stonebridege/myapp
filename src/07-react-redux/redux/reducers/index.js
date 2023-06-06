/*
	该文件用于汇总所有的reducer为一个总的reducer
*/
//引入combineReducers，用于汇总多个reducer
import {combineReducers} from 'redux'
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'

/**
 * combineReducer函数汇总所有的reducer变为一个总的reducer
 * 在 Redux 中，状态是以key-value形式存储的，但它是通过一个称为 "reducer" 的函数来管理的。
 * Redux使用单一的JavaScript 对象来表示整个应用程序的状态，该对象包含多个键值对，每个键表示特定的状态字段。
 * 所以在容器组件的mapStateToProps函数中要注意获取状态时state.persons，这里的persons就是存储时的key值。
 * @type {Reducer<CombinedState<unknown>>}
 */
export default combineReducers({
    count,
    persons
})
