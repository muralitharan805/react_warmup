import './App.css';
import React from 'react'

// State is similar to props, but it is private and fully controlled by the component.


// Adding Lifecycle Methods to a Class



class Time extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      time: new Date()
    }
  }

//   In applications with many components, it’s very important to free up resources taken by the components when they are destroyed.

// We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.

// We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.

// We can declare special methods on the component class to run some code when a component mounts and unmounts:

  componentDidMount(){
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  tick(){
    this.setState({
      time: new Date()
    })
  }
  render(){
  return(

<h2>Time is {this.state.time.toLocaleTimeString()}</h2>


    )
  }
}
function App() {
  return (
    <div className="App">
      <Time ></Time>
    </div>
  );
}

export default App;
