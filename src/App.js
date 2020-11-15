import './App.css';
import React,{Component} from 'react'


// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

// Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

// When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”

// Composing Components
// Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components



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
