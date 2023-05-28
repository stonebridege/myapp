import React, {useState, useRef} from 'react'

export default function App() {

    const [count, setcount] = useState(0)
    var mycount = useRef(0)

    return (
        <div>
            <button onClick={() => {
                setcount(count + 1)
                mycount.current++
            }}>add
            </button>
            {count}-{mycount.current}
        </div>
    )
}
