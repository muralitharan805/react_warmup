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
    this.handleOnclick=this.handleOnclick.bind(this)
  }

  static getDerivedStateFromProps(props,state){
    console.log("LifecycleA getDerivedStateFromProps" );
    return null
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount" );

  }
  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate" );
    return true

  }

  getSnapshotBeforeUpdate(preProps,preState){
    console.log("LifecycleA getSnapshotBeforeUpdate" );
    return null
  }


  componentDidUpdate(preProps,preState,snapShot){
    console.log("LifecycleA componentDidUpdate" );

  }

  handleOnclick(){
    this.setState({
      name:"change"
    })
  }
  render() {
    console.log("LifecycleA render" );


    return (
      <div>
        LifecycleA
        <button onClick={this.handleOnclick}>Click</button>
        <LifecyleB></LifecyleB>
      </div>
    )
  }
}

export default LifecycleA
