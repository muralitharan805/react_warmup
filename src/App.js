import './App.css';
import React from 'react'
import ClickCounter from './ClickCounter'

import HoverCounter from './HoverCounter'

class App extends React.Component {
  render(){

    return (
      <div className="App">
      <h1>this is React Hight order</h1>

      <ClickCounter name="Murali"></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}
}

export default App;
