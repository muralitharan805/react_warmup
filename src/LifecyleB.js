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

  shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate" );
    return true

  }


  getSnapshotBeforeUpdate(preProps,preState){
    console.log("LifecycleB getSnapshotBeforeUpdate" );
    return null
  }

  componentDidUpdate(preProps,preState,snapShot){
    console.log("LifecycleB componentDidUpdate" );

  }

  handleOnclick(){
    this.setState({
      name:"change"
    })
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
