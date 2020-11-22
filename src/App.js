import './App.css';
import ClickCounter from './ClickCounter'
import MouseHoverCounter from './MouseHoverCounter'
import Counterfun from './Counterfun'
import React from 'react'


// The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.



class App extends React.Component {
 
  render(){

    return (
      <div className="App">
      <h1>this is Lifting state Example</h1>
      
     
      <Counterfun 
      myfun={(count,handleOnClick)=>
      (<ClickCounter count={count} handleOnClick={handleOnClick}></ClickCounter>)
      }></Counterfun>

      <Counterfun 
      myfun={(count,handleOnClick)=>
      (<MouseHoverCounter count={count} handleOnClick={handleOnClick}></MouseHoverCounter>)
      }></Counterfun>


    </div>
  );
}

}
export default App;
