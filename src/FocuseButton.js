import React, { Component } from 'react'
import Input from './input'
export class FocuseButton extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef()
  }
  
  clickhandler=()=>{
    this.componentRef.current.foucse()
  }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default FocuseButton
