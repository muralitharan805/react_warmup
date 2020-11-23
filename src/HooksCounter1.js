import React, { useState,useEffect } from 'react'

function HooksCounter1() {

  const [count,setCount]=useState(0)

  const [name,setName]=useState('')

  useEffect(() => {
    console.log("Useeffect update");
    document.title=`Click 
    ${count} time Hooks`

     
  },[count])
  return (
    <div>
      <h1>Hooks useEffect</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={()=>setCount(count+1)}>Click {count}</button>

    </div>
  )
}

export default HooksCounter1
