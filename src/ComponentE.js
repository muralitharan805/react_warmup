import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        Component E content  {this.context}
        <ComponentF></ComponentF>
      </div>
    )
  }
}


ComponentE.contextType=UserContext
export default ComponentE
