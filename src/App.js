import './App.css';
import React from 'react'



class NameFrom extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      value:'',textAreaValue:'',selectItem:''
    }
    this.handleOnSubmit=this.handleOnSubmit.bind(this)
    this.handleOnchange=this.handleOnchange.bind(this)
    this.handleOnchange_textArea=this.handleOnchange_textArea.bind(this)
    this.handleOnchange_SelectItem=this.handleOnchange_SelectItem.bind(this)
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

  handleOnchange_SelectItem(event){
    this.setState({
      selectItem:event.target.value
    })

    console.log(this.state.selectItem);
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
        <br/>
        <select value={this.state.selectItem} onChange={this.handleOnchange_SelectItem}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
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
