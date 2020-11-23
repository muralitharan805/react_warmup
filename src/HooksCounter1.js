import React, { useState,useEffect } from 'react'

function HooksCounter1() {

  const [count,setCount]=useState(0)

  useEffect(() => {
    
    document.title=`Click 
    ${count} time Hooks`

     
  })
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click {count}</button>

    </div>
  )
}

export default HooksCounter1
