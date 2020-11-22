import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
  
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handleOncount}>hello {this.props.name} mouse 
        over count {this.props.count}</h1>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter,11)
