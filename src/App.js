import './App.css';
import React,{Component} from 'react'


class Welcome_class extends React.Component{
  render(){
    return(
      <h1>Hello {this.props.name} welcome this is class Component</h1>
    )
  }
}

function Welcome(props){
  return(
  <h1>Hello {props.name} welcome this is function component</h1>
  )
}


function App(name) {
  return (
    <div className="App">
      <Welcome_class name="murali"></Welcome_class>
      <Welcome name="murali"></Welcome>
    </div>
  );
}

export default App;
