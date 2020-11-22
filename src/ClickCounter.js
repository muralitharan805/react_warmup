import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {
  static propTypes = {

  }
 
  render() {
    return (
      <div>
        <button onClick={this.props.handleOncount}>hello {this.props.name} click 
        count {this.props.count}</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter,3)
