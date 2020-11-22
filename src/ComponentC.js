import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <ComponentE></ComponentE>

      </div>
    )
  }
}

export default ComponentC
