import './App.css';
import Try1 from './Try1'
import Try2 from './Try2'
import React from 'react'


class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      count:0
    }
    this.handleOnClick=this.handleOnClick.bind(this)
  }
  handleOnClick(){
    this.setState((state)=>({
      count:state.count+1
    }))
  }

  render(){

    return (
      <div className="App">
      <h1>this is Lifting state Example</h1>
      
      {/* basic state */}
      <Try1></Try1>
      <Try1></Try1>

      <h1>start lifting state</h1>

      {/* Often, several components need to reflect the same 
      changing data. We recommend lifting the shared state up to their closest common ancestor. Let’s see how this works in action.
      
      */}
      <Try2 handleOnClick={this.handleOnClick} count={this.state.count}></Try2>
      <Try2 handleOnClick={this.handleOnClick} count={this.state.count}></Try2>
    </div>
  );
}

}
export default App;
