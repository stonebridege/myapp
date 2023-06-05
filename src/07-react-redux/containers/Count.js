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

//映射状态
const mapStateToProps = state => ({count: state})

/*
映射操作状态的方法
*/
// const mapDispatchToProps = dispatch => ({
//     //通知redux执行加法
//     jia: (number) => {
//         dispatch(createIncrementAction(number))
//     },
//     jian: (number) => {
//         dispatch(createDecrementAction(number))
//     },
//     AsyncJia: (number, time) => {
//         dispatch(createIncrementAsyncAction(number, time))
//     }
// })

const mapDispatchToProps = {
    jia: createIncrementAction,
    jian: createDecrementAction,
    dispatch: createIncrementAsyncAction
}


// //使用connect()()创建并暴露一个Count的容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI)
//
// //导出容器组件在页面中使用
export default CountContainer


// export default connect(
//     state => ({count: state}),
//     // mapDispatchToProps的一般写法
//     // dispatch => ({
//     //     //通知redux执行加法
//     //     jia: (number) => {
//     //         dispatch(createIncrementAction(number))
//     //     },
//     //     jian: (number) => {
//     //         dispatch(createDecrementAction(number))
//     //     },
//     //     AsyncJia: (number, time) => {
//     //         dispatch(createIncrementAsyncAction(number, time))
//     //     }
//     // })
//     //mapDispatchToProps的简写,只需要提供Action，react-redux帮忙完成自动分发的操作。
//     {
//         jia: createIncrementAction,
//         jian: createDecrementAction,
//         dispatch: createIncrementAsyncAction
//     }
// )(CountUI)