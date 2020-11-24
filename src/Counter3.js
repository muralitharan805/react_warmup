import React, { useReducer } from 'react'


const initialState=0

const reducer =(state,action)=>{
  switch (action) {
    case 'increment':
      return state+1
    case 'decrement':
      return state-1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function Counter3() {
  const [count,dispatch]=useReducer(reducer,initialState)
  const [count2,dispatch2]=useReducer(reducer,initialState)
  return (
    <div>
      Count - {count}
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    
      Count2 - {count}
    
      <button onClick={()=>dispatch('increment')}>Increment2</button>
      <button onClick={()=>dispatch('decrement')}>decrement2</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    
    </div>
  )
}

export default Counter3