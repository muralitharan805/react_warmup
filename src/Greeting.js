import React, { useState } from 'react'
import Row from './Row'

// export default class Greeting extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       name:"johm"
//     }

//     this.onHandleChange=this.onHandleChange.bind(this)
//   }

//   onHandleChange(e){
//     this.setState({
//       name:e.target.value
//     })
//   }
//   render(){
//     return (
      
//       <section>
       
//         <Row label="Name">
//         </Row>
//         <input type='text' value={this.state.name} onChange={this.onHandleChange}></input>
//       </section>
//     )
//   }
// }

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

 
