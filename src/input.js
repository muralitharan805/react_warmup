import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class input extends Component {
  static propTypes = {
    prop: PropTypes
  }
    constructor(props) {
      super(props);
      
      this.inputRef=React.createRef()
     }
    
    foucse(){
      this.inputRef.current.focus()
    }

   
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
 
      </div>
    )
  }
}
