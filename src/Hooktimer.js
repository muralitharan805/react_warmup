import React, { useEffect, useRef, useState } from 'react'

function Hooktimer() {
  const [timer,setTimer]=useState(0)
  const intervelRef = useRef()
  useEffect(()=>{
    intervelRef.current = setInterval(()=>{
      setTimer(state=>state+1)
    },1000)

    return ()=>{
      clearInterval(intervelRef.current)
    }
  },[])
  
  return (
    <div>
      Hook Timer - {timer}
      <button onClick={()=>clearInterval(intervelRef.current)}>Stop hook</button>
    </div>
  )
}

export default Hooktimer
