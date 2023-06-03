import React, {useEffect, useMemo, useState} from "react";
import store from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Search() {
    const [myText, setMytext] = useState("");
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
            console.log("Search进行订阅")
            setCinemaList(store.getState().CinemaListReducer.list)
        })
        return () => {
            //取消订阅
            console.log("Search取消订阅")
            unsubcribe()
        }
    }, [])

    const getCinemaList = useMemo(
        () => cinemaList.filter(item =>
            item.name.toUpperCase().includes(myText.toUpperCase()) ||
            item.address.toUpperCase().includes(myText.toUpperCase()))
        , [myText, cinemaList])

    return (
        <div>
            <input type="text"
                   value={myText}
                   onChange={(evt) => {
                       setMytext(evt.target.value)
                   }
                   }/>
            {
                getCinemaList.map(item =>
                    <dl key={item.cinemaId} style={{padding: "10px"}}>
                        <dt>{item.name}</dt>
                        <dt style={{frontSize: "12px", color: "grey"}}>{item.address}</dt>
                    </dl>
                )
            }
        </div>
    )
}