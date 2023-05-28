import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'

/**
 * 1.将从后台获取数据的逻辑操作抽取到一个函数中,每次返回需要数据即可,封装其复杂的逻辑过程.,
 * @returns {{cinemaList: *[]}}返回需要的值
 */
function useCinemaList() {
    const [cinemaList, setcinemaList] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {
            setcinemaList(res.data.data.cinemas)
        })
    }, [])

    return {
        cinemaList
    }
}

/**
 * 将复杂的cinemaList条件过滤的逻辑封装为函数,返回过滤后的值
 * @param cinemaList :需要过滤的原始数据
 * @param mytext :过滤时需要的参数
 * @returns {{getCinemaList: *}}
 */
function useFilter(cinemaList, mytext) {
    const getCinemaList = useMemo(() => cinemaList.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()) ||
        item.address.toUpperCase().includes(mytext.toUpperCase())
    ), [cinemaList, mytext])

    return {
        getCinemaList
    }
}

export default function Cinema() {
    const [mytext, setmytext] = useState("")
    const {cinemaList} = useCinemaList()
    const {getCinemaList} = useFilter(cinemaList, mytext)

    return <div>
        <input value={mytext} onChange={(evt) => {
            setmytext(evt.target.value)
        }}/>
        {
            getCinemaList.map(item =>
                <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                </dl>
            )
        }
    </div>
}