import React, { Component } from 'react'



const updatedComponent = (OriginalComponent,increment) => {
  class NewComponent extends React.Component {
    constructor(props){
      super(props)
      this.state={
        count:0
      }
      this.handleOncount=this.handleOncount.bind(this)
    }
  
    handleOncount(){
      this.setState((state)=>({
        count:state.count+increment
      }))
    }

    render(){
      return <OriginalComponent count={this.state.count} handleOncount={this.handleOncount} {...this.props}></OriginalComponent>
    }
  }
  return NewComponent
}
 

export default updatedComponent
