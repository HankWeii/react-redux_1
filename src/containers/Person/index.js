import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

function Person(props) {
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const tusika = ()=>{
        const personObj = {id:nanoid(), name, age};
        props.addPerson(personObj);
        setAge('');
        setName('');
    }
    return (
        <div>
            <h2>上方的當前值為: {props.count}</h2>
            <input type="text" placeholder='名前を入力してください' onChange={e=>setName(e.target.value)} value={name}/>&nbsp;
            <input type="text" placeholder='年齢を入力してください' onChange={e=>setAge(e.target.value)} value={age}/>&nbsp;
            <button onClick={tusika}>追加</button>
            <ul>&nbsp;
                {
                    props.person.map(personObj=>
                        <li key={personObj.id}>名前: {personObj.name} 年齢: {personObj.age}</li>
                        )
                }
            </ul>
        </div>
    )
}

export default connect(
    state=>({
        person: state.person,
        count: state.count
    }),
    {
        addPerson: createAddPersonAction
    }
)(Person)


