import './App.css';
import ClickCounter from './ClickCounter'
import MouseHoverCounter from './MouseHoverCounter'
import React from 'react'


class App extends React.Component {
 
  render(){

    return (
      <div className="App">
      <h1>this is Lifting state Example</h1>
      
      <ClickCounter></ClickCounter>
      <MouseHoverCounter></MouseHoverCounter>
 
    </div>
  );
}

}
export default App;
