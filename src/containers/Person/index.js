import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction, createDeletePersonAction } from '../../redux/actions/person'
import { useSpring, animated } from 'react-spring';

function Person(props) {
    const [age, setAge] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState(false)
    const {opacity} = useSpring({opacity: error ? 1 : 0})
    
    const tusika = ()=>{
        if(age.trim() !== ''&& name.trim() !== ''){
            if(!isNaN(age)){
                const personObj = {id:nanoid(), name, age};
                props.addPerson(personObj);
                setAge('');
                setName('');
                setError(false);
                return;
            }
            setError(true);
        }
    }

    const deletePerson = (id)=>{
        props.deletePerson(id)
    }
    return (
        <div>
            <h2>上方的當前值為: {props.count}</h2>
            <div>
                <span>名前: </span>
                <input type="text" placeholder='名前を入力してください' onChange={e=>setName(e.target.value)} value={name}/>&nbsp;
            </div>
            <span>年齢: </span>
            <input type="text" placeholder='年齢を入力してください' onChange={e=>setAge(e.target.value)} value={age}/>&nbsp;
            <button onClick={tusika}>追加</button>
            <animated.h3 style={{opacity, color: 'red', paddingLeft:"2vw"}}>年齡為非數字</animated.h3>
            <ul>&nbsp;
                {
                    props.person.map(personObj=>
                        <li key={personObj.id}>名前: {personObj.name} 年齢: {personObj.age}&nbsp;&nbsp;<button onClick={()=>deletePerson(personObj.id)}>消去</button></li>
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
        addPerson: createAddPersonAction,
        deletePerson: createDeletePersonAction
    }
)(Person)


