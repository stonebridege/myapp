import React, {useState} from 'react';

export default function App() {
    const [name, setName] = useState("stone bridge")
    const [age, setAge] = useState(16)
    console.log("初次打印name:" + name + ";age:" + age)
    return (
        <div>
            <button onClick={() => {
                setName("zhangsan")
                setAge(100)
                console.log("再次打印name:" + name + ";age:" + age)
            }}>click
            </button>
            app-{name}--{age}
        </div>
    );
}