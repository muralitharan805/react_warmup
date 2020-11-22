import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class LifecycleB extends Component {
  static propTypes = {

  }

  constructor(props){
    super(props)
    console.log("LifecycleB contructor");
    this.state={
      name:"murali"
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("LifecycleB getDerivedStateFromProps" );
    return null
  }

  componentDidMount(){
    console.log("LifecycleB componentDidMount" );

  }
  render() {
    console.log("LifecycleB render" );

    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
