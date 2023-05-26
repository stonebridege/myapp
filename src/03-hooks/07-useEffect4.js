import React, {useEffect, useState} from 'react';

export default function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effect function called');

        // 返回一个清理函数
        return () => {
            console.log('Cleanup function called');
        };
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};


