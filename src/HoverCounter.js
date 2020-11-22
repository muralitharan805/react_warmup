import React, { Component } from 'react'

export class HoverCounter extends Component {
  static propTypes = {

  }
  constructor(props){
    super(props)
    this.state={
      count:0
    }
    this.handleOncount=this.handleOncount.bind(this)
  }

  handleOncount(){
    this.setState((state)=>({
      count:state.count+1
    }))
  }
  render() {
    return (
      <div>
        <h1 onMouseOver={this.handleOncount}>mouse hover count {this.state.count}</h1>
      </div>
    )
  }
}

export default HoverCounter
