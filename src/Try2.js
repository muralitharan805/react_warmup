import React, { Component } from 'react'

export class Try2 extends Component {
  
  render() {
    return (
      <div>
        <h1>This click count {this.props.count}</h1>
        <button onClick={this.props.handleOnClick}>Click</button>
      </div>
    )
  }
}

export default Try2
