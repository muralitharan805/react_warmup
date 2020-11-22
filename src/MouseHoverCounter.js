import React, { Component } from 'react'

export class MouseHoverCounter extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      count:0
    }
    this.handleOnClick=this.handleOnClick.bind(this)
  }
  handleOnClick(){
    this.setState((state)=>({
      count:state.count+1
    }))
  }
  render() {
    return (
      <div>
        <h1 onMouseOver={this.handleOnClick}>This click count {this.state.count}</h1>
      </div>
    )
  }
}

export default MouseHoverCounter
