import React,{useState} from 'react'

export default function HooksCounter() {
  const [count,setCounter] =useState(0)

  return (
    <div>
      <button onClick={()=>setCounter(count + 1)}>Count {count}</button>
    </div>
  )
}
