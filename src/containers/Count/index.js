import React from 'react'
import { connect } from 'react-redux'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import { useState } from 'react'

const Count = (props)=> {

    const [selectNum, setSelectNum] = useState(1);

    const increment = ()=>{
        props.increment(selectNum*1);
    }

    const decrement = ()=>{
        props.decrement(selectNum*1);
    }

    const incrementIfOdd = ()=>{
        if(props.count % 2 !== 0) 
            props.increment(selectNum*1)
    }

    const incrementAsync = ()=>{
        props.incrementAsync(selectNum*1, 500)
    }

  return (
    <div>
        <h2>當前值為: {props.count} 下方總人數為: {props.person.length}</h2>
        &nbsp;&nbsp;<select value={selectNum} onChange={e=>setSelectNum(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
        </select>&nbsp;
        <button onClick={increment}>+</button>&nbsp;
        <button onClick={decrement}>-</button>&nbsp;
        <button onClick={incrementIfOdd}>當前值為奇數才加</button>&nbsp;
        <button onClick={incrementAsync}>過3毫秒才加</button>&nbsp;
    </div>
  )
}

export default connect(
    state=>({
        count: state.count,
        person: state.person
    }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(Count)