import React, { Component } from 'react'

export class Counterfun extends Component {
  
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
        {
          this.props.myfun(this.state.count,this.handleOnClick)
        }
      </div>
    )
  }
}

export default Counterfun
