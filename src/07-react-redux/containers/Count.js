//1.引入Count的UI组件
import CountUI from "../components/count";
//2.引入connect用于连接UI组件和redux
import {connect} from 'react-redux'
//3.引入action,在Action定义同步的Action对象，或者异步的Action(里面有异步逻辑)
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../redux/count_action";

/*
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
    return {count: state}
}

/*
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
    return {
        //通知redux执行加法
        jia: (number) => {
            dispatch(createIncrementAction(number))
        },
        jian: (number) => {
            dispatch(createDecrementAction(number))
        },
        AsyncJia: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time))
        }
    }
}

/**
 * 使用connect()()创建并暴露一个Count的容器组件，在使用时，则使用容器组件而不是UI组件。
 * 功能容器组件和UI组件建立联系,使用容器组件时，store来源于父页面app.js
 * connect()(),第一个括号要传递mapStateToProps函数和mapDispatchToProps函数，第二个参数是UI组件
 */
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)

//导出容器组件在页面中使用
export default CountContainer