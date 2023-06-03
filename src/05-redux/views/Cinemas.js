import React, {useEffect, useState} from 'react'
import store from '../redux/store'
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Cinemas(props) {
    //此时不需要订阅，每次路由切换，原先的Cinemas组件会被销毁，会重新创建组件并读取最新的store对象
    const [cityName] = useState(store.getState().CityReducer.cityName)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            //去后台取数据
            //actionCreater里写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("获取缓存")
        }
    }, [])

    return (
        <div>
            <div onClick={() => {
                props.history.push('/city')
            }}>{cityName}</div>
            cinemas
        </div>
    )
}
