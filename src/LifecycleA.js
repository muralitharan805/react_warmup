import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LifecyleB from './LifecyleB'
export class LifecycleA extends Component {
  static propTypes = {

  }

  constructor(props){
    super(props)
    console.log("LifecycleA contructor");
    this.state={
      name:"murali"
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("LifecycleA getDerivedStateFromProps" );
    return null
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount" );

  }



  render() {
    console.log("LifecycleA render" );


    return (
      <div>
        LifecycleA
        <LifecyleB></LifecyleB>
      </div>
    )
  }
}

export default LifecycleA
