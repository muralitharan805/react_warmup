import React, { Component } from 'react'
import Memo from './Memo';
import PureCom from './PureCom';
import RegCom from './RegCom';

export class ParCom extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:"Murali"
    }
  }
  
  componentDidMount(){
    setInterval(() => {
      this.setState({
        name:"Murali"
      })
    }, 2000);
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        Parent component
        <Memo name={this.state.name}></Memo>
{/*         
        <RegCom name={this.state.name}></RegCom>
        <PureCom name={this.state.name}></PureCom> */}

      </div>
    )
  }
}

export default ParCom
