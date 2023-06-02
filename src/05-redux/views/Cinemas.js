import React, {useState} from 'react'
import store from '../redux/store'

export default function Cinemas(props) {
    //此时不需要订阅，每次路由切换，原先的Cinemas组件会被销毁，会重新创建组件并读取最新的store对象
    const [cityName] = useState(store.getState().CityReducer.cityName)
    return (
        <div>
            <div onClick={() => {
                props.history.push('/city')
            }}>{cityName}</div>
            cinemas
        </div>
    )
}
