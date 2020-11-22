import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class RefsDemo extends PureComponent {
  static propTypes = {

  }

  constructor(props) {
    super(props);
    
    this.inputRef = React.createRef()
  }
  
  componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef);
  }
  Clickhandle =()=>{
    alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type='text' 
        ref={this.inputRef} ></input>
        <button onClick={this.Clickhandle}>Click</button>
      </div>
    )
  }
}
