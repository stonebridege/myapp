import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import './css/03-communication.css'

const GlobalContext = React.createContext()//创建context对象

export default function App() {
    const [filmList, setFilmList] = useState([])
    const [info, setInfo] = useState("")
    useEffect(() => {
        axios.get('/test.json').then(res => {
            setFilmList(res.data.data.films)
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            call: "打电话",
            sms: "短信",
            info: info,
            changeInfo: (value) => {
                setInfo(value)
            }
        }}>
            < div>
                {
                    filmList.map(item =>
                        <FilmItem key={item.filmId} {...item}></FilmItem>
                    )
                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    );
}

function FilmItem(props) {
    //this.props转化为this.props
    let {name, poster, grade, synopsis} = props
    //可以直接通过context获取value值
    const context = useContext(GlobalContext)
    console.log(context)
    return (<div className='filmitem' onClick={() => {
        context.changeInfo(synopsis)
    }}>
        <img src={poster} alt={name}/>
        <h4>{name}</h4>
        <div>关注评分：{grade}</div>
    </div>)
}


function FilmDetail() {
    const context = useContext(GlobalContext)
    return <div className='filmDetail'>
        detail-{context.info}
    </div>
}