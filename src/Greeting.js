import React, { useState } from 'react'
import Row from './Row'


export default function Greeting(props){
  const [name,setName] = useState("john")
  function handleOnchange(e){
    setName(e.target.value)
  }
  return (
          <section>
            <Row label="Name">
            </Row>
            <input type='text' value={name} onChange={handleOnchange} ></input>
          </section>
        )
}

 
