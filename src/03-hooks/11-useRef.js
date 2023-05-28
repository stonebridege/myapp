import React, {useRef, useState} from 'react';

export default function App() {
    //1.在函数组件中使用useRef创建可变引用的Hook，它返回一个可变的 ref 对象，可以在组件的整个生命周期中存储和访问引用的值。
    const myText = useRef()
    const [list, setList] = useState([11, 22, "aaaa"])

    //3.可以通过ref.current.value访问其值
    const handleAdd = () => {
        setList([...list, myText.current.value])
        myText.current.value = ""
    }

    const handelDel = (index) => {
        var newlist = [...list]
        newlist.splice(index, 1)
        setList(newlist)
    }

    return (
        <div>
            {/*2.在dom中引用该ref对象*/}
            <input ref={myText}/>
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