import React, {useEffect} from 'react'
import store from "../redux/store";
import {showAction,hideAction} from '../redux/action'

export default function Detail(props) {
    console.log(props.match.params.myid, "利用id去后端拿数据。")

    useEffect(() => {
        //1.组件打开时触发来分发action
        store.dispatch(hideAction)
        //2.组件关闭时触发来分发action
        return () => {
            store.dispatch(showAction)
        }
    }, [])

    return (
        <div>
            deteail
        </div>
    )
}