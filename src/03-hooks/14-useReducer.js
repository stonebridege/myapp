import React, {useReducer} from 'react';

// 1.首先定义了一个 `reducer` 函数，它接收当前状态 `prevState` 和一个描述操作的 `action` 对象，并根据操作类型更新状态。
const reducer = (prevState, action) => {
    console.log("reducerAA", prevState, action)
    let newState = {...prevState}
    switch (action.type) {
        case 'kerwin-minus':
            newState.count--
            return newState

        case 'kerwin-add':
            newState.count++
            return newState

        default:
            return prevState
    }

}
//2.定义状态initalState,并设置初始值,用于保存状态
const initalState = {
    count: 0
}
export default function App() {
    //3.在函数式组件App中使用 `useReducer` 创建了state和dispatch 函数，并将 `reducer` 和初始状态 `{ count: 0 }` 作为参数传递进去。
    const [state, dispatch] = useReducer(reducer, initalState)

    return (
        <div>
            {/*5.当我们需要对状态进行修改时，调用dispatch（实际是调用reducer函数）完成修改。*/}
            <button onClick={() => {
                dispatch({type: "kerwin-minus"})
            }}>-
            </button>
            {/*4.在函数式组件需要访问状态时，就可以通过state.count访问；*/}
            {state.count}
            <button onClick={() => {
                dispatch({type: "kerwin-add"})
            }}>+
            </button>
        </div>
    );
}