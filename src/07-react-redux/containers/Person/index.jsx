import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from 'react-redux'
import {createAddPerson} from "../../redux/actions/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const id = nanoid()
        const personObj = {id, name, age}
        console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <h2>上方组件求和为{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((item => {
                            return <li key={item.id}>{item.name}----{item.age}</li>
                        }))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        persons: state.persons,
        count: state.count
    }),
    {
        addPerson: createAddPerson
    }
)(Person)