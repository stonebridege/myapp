import React, {useReducer, useContext} from 'react'


// 1.首先定义了一个 `reducer` 函数，它接收当前状态 `prevState` 和一个描述操作的 `action` 对象，并根据操作类型更新状态。
const reducer = (prevState, action) => {
    let newstate = {...prevState}
    switch (action.type) {
        case "change-a":
            newstate.a = action.value
            return newstate
        case "change-b":
            newstate.b = action.value
            return newstate
        default:
            return prevState
    }
}

//2.定义状态initalState,并设置初始值,用于保存状态
const initailState = {
    a: "11111",
    b: "11111"
}

const GlobalContext = React.createContext()
export default function App() {
    //3.在函数式组件App中使用 `useReducer` 创建了state和dispatch 函数，并将 `reducer` 和初始状态 `{ count: 0 }` 作为参数传递进去。
    const [state, dispatch] = useReducer(reducer, initailState)
    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            <div>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    //4.使用useContext获取上下文的值,获取来自父组件的传递的dispatch
    const {dispatch} = useContext(GlobalContext)
    return <div style={{background: "red"}}>
        {/*5.当我们需要对状态进行修改时，调用dispatch（实际是调用reducer函数）完成修改。*/}
        <button onClick={() => {dispatch({type: "change-a", value: "2222222"})}}>改变a</button>
        <button onClick={() => {dispatch({type: "change-b", value: "333333"})}}>改变b</button>
    </div>
}

function Child2() {
    const {state} = useContext(GlobalContext)
    return <div style={{background: "yellow"}}>
        child2-{state.a}
    </div>
}

function Child3() {
    const {state} = useContext(GlobalContext)
    return <div style={{background: "gray"}}>
        child3-{state.b}
    </div>
}