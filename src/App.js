import './App.css';
import React from 'react'



class NameFrom extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      value:'',textAreaValue:''
    }
    this.handleOnSubmit=this.handleOnSubmit.bind(this)
    this.handleOnchange=this.handleOnchange.bind(this)
    this.handleOnchange_textArea=this.handleOnchange_textArea.bind(this)
  }

  handleOnchange(event){
    this.setState({
      value:event.target.value
    })

    console.log(this.state.value);
  }

  handleOnchange_textArea(event){
    this.setState({
      textAreaValue:event.target.value
    })

    console.log(this.state.textAreaValue);
  }
  handleOnSubmit(event){
    
    event.preventDefault()
  }
  render(){
    return(
      <div>
        <br/>
        <form onSubmit={this.handleOnSubmit} >
        <label>
          Name: 
          <input type='text' value={this.state.value} onChange={this.handleOnchange} ></input>
          <input type='submit' value='submit' ></input>
        </label>
        <br/>
        <textarea value={this.state.textAreaValue} onChange={this.handleOnchange_textArea}>

        </textarea>
        </form>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <NameFrom></NameFrom>
    </div>
  );
}

export default App;
