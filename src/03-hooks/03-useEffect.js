import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function App() {
    const [list, setList] = useState([])
    useEffect(() => {
        // 在组件渲染完成后执行的副作用操作
        console.log('Component mounted');
        axios.get("/test.json").then(res => {
            setList(res.data.data.films)
        })

        return () => {
            // 在组件卸载时执行的清理操作
            console.log('Component unmounted');
        };
    }, []); // 依赖数组为空，只在组件首次渲染后执行一次


    return (
        <div>
            app
            {
                list.map(item =>
                    <li key={item.filmId}>{item.name
                    }</li>
                )
            }
        </div>
    );
}