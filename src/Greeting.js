import React, { useState } from 'react'
import Row from './Row'


export default function Greeting(props){
  const [name,setName] = useState("john")
  const [surname,setsurName] = useState("sk")
  function handleOnchange(e){
    setName(e.target.value)
  }
  function handleOnSurnamechange(e){
    setsurName(e.target.value)
  }
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
          </section>
        )
}

 
