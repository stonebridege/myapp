import React, {useState} from 'react'
import store from "../redux/store";

export default function City(props) {
    const [list] = useState(["北京", "上海", "深圳", "广州"])
    return (
        <div>
            {
                list.map(item =>
                    <li key={item} onClick={() => {
                        store.dispatch({
                            type: "change-city",
                            payload: item
                        })
                        //退回原先的页面
                        props.history.goBack()
                    }}>{item}</li>
                )
            }
        </div>
    )
}
