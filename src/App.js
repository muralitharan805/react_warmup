import './App.css';
import React from 'react'


// Handling Events
// Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

// React events are named using camelCase, rather than lowercase.
// With JSX you pass a function as the event handler, rather than a string.



class Mybutton extends React.Component{
  constructor(props){
    super(props)
    this.myClkFun=this.myClkFun.bind(this)
    this.state={
      change:true
    }
  }
  
  myClkFun(){

    this.setState((state)=>({
      change:!state.change
    }))
  }
  render(){
    return(
    <button onClick={this.myClkFun}>{
      this.state.change ? 'on' : 'off'
    }</button>
    )
  }
}

// If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks

// This syntax is enabled by default in Create React App.


class Mybutton2 extends React.Component{
  
  state={
      change:true
    }
  
  myClkFun=()=>{

    this.setState((state)=>({
      change:!state.change
    }))
  }
  render(){
    return(
    <button onClick={this.myClkFun}>{
      this.state.change ? 'on' : 'off'
    }</button>
    )
  }
}

// If you aren’t using class fields syntax, you can use an arrow function in the callback:


class Mybutton3 extends React.Component{
  
  state={
      change:true
    }
  
  myClkFun(){

    this.setState((state)=>({
      change:!state.change
    }))
  }
  render(){
    return(
    <button onClick={()=>this.myClkFun()}>{
      this.state.change ? 'on' : 'off'
    }</button>
    )
  }
}
// #React Documentation suggest
// https://reactjs.org/docs/handling-events.html
// The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem

function App() {
  return (
    <div className="App">
     <Mybutton></Mybutton><br/>
     <Mybutton2></Mybutton2><br/>
     <Mybutton3></Mybutton3>
    </div>
  );
}

export default App;
