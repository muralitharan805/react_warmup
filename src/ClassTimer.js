import React, { Component } from 'react'

export default class ClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
   }

  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState((state)=>({
        count:state.count+1
      }))
    }, 1000);
  }
  
  

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  
  render() {
    return (
      <div>
        {
          this.state.count
        }

        <button onClick={()=>clearInterval(this.timer)}>Stop count</button>
      </div>
    )
  }
}
