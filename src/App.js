import './App.css';
import React from 'react'
import ComponentC from './ComponentC'
import {UserProvider} from './userContext'

class App extends React.Component {

  render(){

    return (
      <div className="App">
      <h1>this is React Context</h1>
      <UserProvider value="Murali">
        
      <ComponentC></ComponentC>
      </UserProvider>
    </div>
  );
}
}

export default App;
