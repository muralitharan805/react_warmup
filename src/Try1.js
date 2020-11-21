import React, { Component } from 'react'

export class Try1 extends Component {
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
        <h1>This click count {this.state.count}</h1>
        <button onClick={this.handleOnClick}>Click</button>
      </div>
    )
  }
}

export default Try1
