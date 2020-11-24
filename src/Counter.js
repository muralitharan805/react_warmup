import React,{useMemo, useState} from 'react'

function Counter() {
  const [counterone, setCounterone] = useState(0)
  const [countertwo, setCountertwo] = useState(0)

  const incone =()=>{
    setCounterone(counterone+1)
  }
  const inctwo =()=>{
    setCountertwo(countertwo+1)
  }

  const isEven =useMemo(
    ()=>{
      let i=0
      while(i<2000000)i++
      return counterone % 2 === 0
    },[counterone]
  ) 
  return (
    <div>
      <div>
  <button onClick={incone}>Count one {counterone}</button>
  <span>{isEven ? 'even' : 'odd'}</span>
      </div>

      <div>
  <button onClick={inctwo}>Count Two {countertwo}</button>
      </div>
    </div>
  )
}

export default Counter
