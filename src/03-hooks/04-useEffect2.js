import React, {useEffect, useState} from 'react';

export default function App() {
    const [name, setName] = useState("kerwin")
    useEffect(() => {
        // 在组件渲染完成后执行的副作用操作
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name]); // [依赖的状态(空数组,表示不依赖,只在组件首次渲染后执行一次)]


    return (
        <div>
            app-{name}

            <button onClick={() => {
                setName("xiaoming")
            }}>click
            </button>
        </div>
    );
}