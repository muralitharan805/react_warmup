import React, { Component } from 'react'
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
  return (
      
          <section>
           
            <Row label="Name">
            </Row>
  <h1>{props.name}</h1>
          </section>
        )
}

 
