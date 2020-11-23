import React, { Component } from 'react'

export default class ClassComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
  }

  handleOnCount=()=>{
    this.setState((state)=>({
      count:state.count+1
    }))
  }

  componentDidMount(){
    document.title=`Click ${this.state.count} time`
  }

  componentDidUpdate(preProps,preState){
    document.title=`Click ${this.state.count} time`

  }
  

  render() {
    return (
      <div>
        <button onClick={this.handleOnCount}>Click {this.state.count}</button>
      </div>
    )
  }
}
