import React, {useCallback, useState} from 'react';

export default function App() {
    //1.useState是一个记忆函数，可以记住状态，当count改变时，函数组件重新渲染，但是没有重新执行useState(0)将count重置为0
    const [text, setText] = useState("")
    const [list, setList] = useState([11, 22, "aaaa"])

    //2.防止因为组件重新渲染，导致方法被重新创建 ，起到缓存作用; 只有第二个参数变化了，才重新声明一次
    const handleChange = useCallback((evt) => {
        setText(evt.target.value)
    }, [])

    const handleAdd = useCallback(() => {
        console.log(text)
        setList([...list, text])
        setText('')
    }, [text, list])

    const handelDel = useCallback((index) => {
        console.log(index)
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }, [list])

    return (
        <div>
            <input onChange={handleChange} value={text}/>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>{item}
                            <button onClick={() => {
                                handelDel(index)
                            }}>del
                            </button>
                        </li>
                    )
                }
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    );
}