import React, {useEffect, useState} from 'react'
import store from '../redux/store'
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Cinemas(props) {
    //此时不需要订阅，每次路由切换，原先的Cinemas组件会被销毁，会重新创建组件并读取最新的store对象
    const [cityName] = useState(store.getState().CityReducer.cityName)
    const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

    useEffect(() => {
        if (store.getState().CinemaListReducer.list.length === 0) {
            //去后台取数据
            //actionCreater里写异步
            store.dispatch(getCinemaListAction())
        } else {
            console.log("从缓存中获取")
        }
        var unsubcribe = store.subscribe(() => {
            console.log("Cinemas进行订阅")
            setCinemaList(store.getState().CinemaListReducer.list)
        })
        return () => {
            //取消订阅
            console.log("Cinemas取消订阅")
            unsubcribe()
        }
    }, [])

    return (
        <div>
            <div onClick={() => {props.history.push('/city')}} style={{float:"left"}}>{cityName}</div>

            {
                cinemaList.map(item =>
                    <dl key={item.cinemaId} style={{padding: "10px"}}>
                        <dt>{item.name}</dt>
                        <dt style={{frontSize: "12px", color: "grey"}}>{item.address}</dt>
                    </dl>
                )
            }
        </div>
    )
}
