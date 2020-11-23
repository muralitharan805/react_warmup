import React, { Component } from 'react'

export default class ClassComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0,name:''
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
    console.log("name");

    if(preState.count!==this.state.count){
      
      console.log("Updated");
      document.title=`Click ${this.state.count} time class`
    }

  }
  

  render() {
    return (
      <div>
        <input type='text' 
        value={this.state.name}
        onChange={(e)=>
          {
            this.setState({
              name:e.target.value
            })
          }}></input>
        <button onClick={this.handleOnCount}>Click {this.state.count}</button>
      </div>
    )
  }
}
