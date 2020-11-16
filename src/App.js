import './App.css';
import React from 'react'
class Time extends React.Component{
  render(){
    return(
      <div>
    <h1>Welcome</h1>
    <h1>it {new Date().toLocaleTimeString()}</h1>
      </div>
  
    )
  }
}

function App() {
  return (
    <div className="App">
      <Time></Time>
    </div>
  );
}

export default App;
