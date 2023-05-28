import React, {useContext, useEffect, useReducer} from 'react';
import axios from "axios";
import './css/03-communication.css'
const GlobalContext = React.createContext()

// 1.首先定义了一个 `reducer` 函数，它接收当前状态 `prevState` 和一个描述操作的 `action` 对象，并根据操作类型更新状态。
const reducer = (prevState, action) => {
    let newstate = {...prevState}
    switch (action.type) {
        case "change-filmList":
            newstate.filmList = action.value
            return newstate
        case "change-info":
            newstate.info = action.value
            return newstate
        default:
            return prevState
    }
}

/**
 * 2.定义状态initalState,并设置初始值,用于保存状态
 * @type {{filmList: *[], info: string}}
 * info:保存电影信息简介信息
 * filmList:保存电影列表信息
 */
const initailState = {
    info: '',
    filmList: []
}

export default function App() {
    //3.在函数式组件App中使用 `useReducer` 创建了state和dispatch 函数，
    const [state, dispatch] = useReducer(reducer, initailState)
    useEffect(() => {
        axios.get('/test.json').then(res => {
            dispatch({
                type: 'change-filmList',
                value: res.data.data.films
            })
        })
    }, [])


    return (
        <GlobalContext.Provider value={{state, dispatch}}>
            < div>
                {state.filmList.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)}
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    );
}

function FilmItem(props) {
    let {name, poster, grade, synopsis} = props
    //4.使用useContext获取上下文的值,获取来自父组件的传递的dispatch,通过dispatch改变info信息
    const {dispatch} = useContext(GlobalContext)
    return (<div className='filmitem' onClick={() => {
        dispatch({
            type: 'change-info',
            value: synopsis
        })
    }}>
        <img src={poster} alt={name}/>
        <h4>{name}</h4>
        <div>关注评分：{grade}</div>
    </div>)
}

function FilmDetail() {
    //5.使用useContext获取上下文的值,获取来自父组件的传递的state,通过state获取info
    const {state} = useContext(GlobalContext)
    return <div className='filmDetail'>detail-{state.info}</div>
}