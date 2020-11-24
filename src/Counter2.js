import React, { useReducer } from 'react'


const initialState={
  firstCounter:0,
  secondCount:10
}

const reducer =(state,action)=>{
  switch (action.type) {
    case 'increment':
      return {...state, firstCounter:state.firstCounter+action.value}
    case 'decrement':
      return {...state,firstCounter:state.firstCounter-action.value}
    
      case 'increment2':
        return {...state, secondCount:state.secondCount+action.value}
      case 'decrement2':
        return {...state,secondCount:state.secondCount-action.value}
      
      case 'reset':
      return initialState
    default:
      return state
  }
}
function Counter2() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      Count1 - {count.firstCounter}
      Count2 - {count.secondCount}
      <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
      <button onClick={()=>dispatch({type:'increment2',value:1})}>decrement2</button>
      <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrement2</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Counter2
