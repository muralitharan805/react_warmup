import React, { Component } from 'react'

export class RegCom extends Component {
  render() {
    console.log("regu render");

    return (
      <div>
        regular component {this.props.name}
      </div>
    )
  }
}

export default RegCom
