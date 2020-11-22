import React, { Component } from 'react'

export class MouseHoverCounter extends Component {
  
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handleOnClick}>Mouse hover count {this.props.count}</h1>
      </div>
    )
  }
}

export default MouseHoverCounter
