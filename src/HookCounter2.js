import React, { useState } from 'react'

function HookCounter2() {

  const initcount = 0
  const [count,setCount]=useState(initcount)
  const incrementFive = ()=>{
    for(let i=0;i<5;i++){
      setCount(preState=>preState+1)
    }
  }
  return (
    <div>
      Count : {count}
      <button onClick={()=>setCount(initcount)}>reset</button>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>decrment</button>
      <button onClick={incrementFive} >Increment 5</button>
    </div>
  )
}

export default HookCounter2
