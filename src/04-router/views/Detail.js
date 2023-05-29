import React from 'react'
import {useParams} from "react-router-dom";

export default function Detail(props) {
    const myid1 = props.match.params.myid
    console.log("通过props.match.params.参数名获取参数:", myid1)
    const {myid} = useParams();
    console.log("通过 useParams 钩子函数获取了动态路由参数myid:", myid)
    // console.log(props.location.query.myid,"利用id去后端拿数据。")
    // console.log(props.location.state.myid,"利用id去后端拿数据。")
    return (
        <div>
            deteail
        </div>
    )
}
