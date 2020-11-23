import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Counter extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state={
      count:0
    }
    this.handleOnClick=this.handleOnClick.bind(this)
  }

  handleOnClick(){
    this.setState((prestate)=>({
      count:prestate.count+1
    }))
  }
  
  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>count {this.state.count}</button>
      </div>
    )
  }
}

export default Counter
