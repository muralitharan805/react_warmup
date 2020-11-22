import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {
  render() {
    console.log("pure render");

    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}
