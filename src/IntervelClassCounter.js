import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class IntervelClassCounter extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      count:0
    }
  }
  
  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  tick=()=>{
    this.setState((state)=>({
      count : state.count+1
    }))
  }
  render() {
    return (
      <div>
        {
          this.state.count
        }
      </div>
    )
  }
}
