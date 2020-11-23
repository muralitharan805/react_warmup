import React, { useEffect, useState } from 'react'

function HooksMouse() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const handleMouseMove =(e)=>{
    console.log('handle mouse move method call');

    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('useEffect Call');
    window.addEventListener('mousemove',handleMouseMove)
     
  },[])
  return (
    <div>
      X:{x},Y:{y}
    </div>
  )
}

export default HooksMouse
