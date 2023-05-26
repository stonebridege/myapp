import React, {useEffect, useState} from 'react';

export default function App() {
    //useState是一个记忆函数，可以记住状态，当count改变时，函数组件重新渲染，但是没有重新执行useState(0)将count重置为0
    const [count, setCount] = useState(0);
    var mycount = 0


    useEffect(() => {
        console.log('Effect function called');

        // 返回一个清理函数
        return () => {
            console.log('Cleanup function called');
        };
    }, [count]);




    return (
        <div>
            <p>Count: {count}---{mycount}</p>
            <button onClick={() => {
                setCount(count + 1)
                mycount++
            }}>Increment
            </button>
        </div>
    );
};


