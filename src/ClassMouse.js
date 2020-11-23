import React, { Component } from 'react'

export default class ClassMouse extends Component {
 constructor(props) {
   super(props);
   this.state={
     x:0,y:0
   }
 }
 
 logMousePostion=(e)=>{
   console.log("mouse method call");
   this.setState({
     x:e.clientX,
     y:e.clientY
   })
 }
 componentDidMount(){
   console.log("did mount call");
   window.addEventListener('mousemove',this.logMousePostion)
 }
  render() {
    return (
      <div>
        <h1>X:{this.state.x} Y:{this.state.y}</h1>
      </div>
    )
  }
}
