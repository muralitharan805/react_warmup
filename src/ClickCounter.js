import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ClickCounter extends Component {
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
        <button onClick={this.handleOncount}>click count {this.state.count}</button>
      </div>
    )
  }
}

export default ClickCounter
