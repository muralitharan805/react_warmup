import React, { useState,useEffect } from 'react'
import Row from './Row'


export default function Greeting(props){
  const [name,setName] = useState("john")
  const [surname,setsurName] = useState("sk")

  const [width,setWidth] = useState(window.innerWidth)

  function handleResize(){
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize',handleResize)
    return () => {
      window.removeEventListener('resize',handleResize)

    }
  })

  function handleOnchange(e){
    setName(e.target.value)
  }

  function handleOnSurnamechange(e){
    setsurName(e.target.value)
  }

  useEffect(
    ()=>{
    document.title=name+' '+surname

    }
  )
  return (
          <section>
            <div>

            <Row label="Name">
            </Row>
            <input type='text' value={name} onChange={handleOnchange} ></input>
            </div>
            <div>

            <Row label="Surname">
            </Row>
            <input type='text' value={surname} onChange={handleOnSurnamechange} ></input>
            </div>

            <div>

            <Row label="Windos With checking">
            </Row>
            {width}
            </div>

          </section>
        )
}

 
