import React, {useEffect, useMemo, useState} from "react";
import axios from "axios";

export default function App() {
    const [myText, setMytext] = useState("");
    const [cinemaList, setCinemaList] = useState([]);

    useEffect(() => {
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&ticketFlag=0&k=6939037",
                method: "get",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16821403713477519055454209"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res => {
                setCinemaList(res.data.data.cinemas)
            })
        }, []
    )

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
                    <dl key={item.cinemaId}>
                        <dt>{item.name}</dt>
                        <dt>{item.address}</dt>
                    </dl>
                )
            }
        </div>
    )
}