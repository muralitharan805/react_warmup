import React, { useContext } from 'react'
import { CountContext } from './App'

function ComA() {

  const countContextr = useContext(CountContext)
  return (
    <div>
      Componenet A 
      <button onClick={()=>countContextr.countDispath('increment')}>Increment</button>
      <button onClick={()=>countContextr.countDispath('decrement')}>decrement</button>
      <button onClick={()=>countContextr.countDispath('reset')}>Reset</button>
    
    </div>
  )
}

export default ComA
