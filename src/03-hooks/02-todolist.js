import React, {useState} from 'react';

export default function App() {
    //1.声明两个状态变量text保存输入的值；list保存所有的值
    const [text, setText] = useState("")
    const [list, setList] = useState([11, 22, "aaaa"])

    //2.将输入框中随时输入的值保存到变量text中
    const handleChange = (evt) => {
        setText(evt.target.value)
    }

    //3.当点击添加是，将text里的值保存到list中
    const handleAdd = () => {
        console.log(text)
        setList([...list, text])
        setText('')
    }

    //4.根据索引删除list中的值
    const handelDel = (index) => {
        console.log(index)
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            <input onChange={handleChange} value={text}/>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>{item}
                            <button onClick={() => {handelDel(index)}}>del</button>
                        </li>
                    )
                }
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    );
}