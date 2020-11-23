import React, { useEffect, useState } from 'react'

function IntervelHooks() {
  const [count,setCounter] =useState(0)

  const tick=()=>{
    setCounter((count)=>count+1)
  }
  useEffect(()=>{
   const timer= setInterval(tick,1000)

    return ()=>{
      clearInterval(timer)
    }
  },[])
  return (
    <div>
      {
        count
      }  
    </div>
  )
}

export default IntervelHooks
