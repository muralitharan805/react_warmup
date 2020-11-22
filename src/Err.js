import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Err extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    this.state={
      haserror:false
    }
  }
  
  getDerivedStateFromError(error){
    return {
      haserror:true
    }
  }
  render() {
     if(!this.state.haserror){
       return <h1>Something wrong</h1>
     }

     return this.props.children
  }
}

export default Err
