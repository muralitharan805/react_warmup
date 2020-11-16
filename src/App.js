import './App.css';
import React from 'react'

// Conditional Rendering


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn
  if(isLoggedIn){
    return <UserGreeting></UserGreeting>
  }else{
    return <GuestGreeting></GuestGreeting>

  }
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// Element Variables
// You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

// Consider these two new components representing Logout and Login buttons:


class LogInControl extends React.Component{
  constructor(props){
    super(props)
    this.handleLoginClick=this.handleLoginClick.bind(this)
    this.handleLogoutClick=this.handleLogoutClick.bind(this)
    this.state={
      isLoggedIn: false
    }
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button
    if(isLoggedIn){
      button =<LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    }else{
      button =<LoginButton onClick={this.handleLoginClick}></LoginButton>
      
    }
    
    return(
      
      <div>

      <Greeting isLoggedIn={isLoggedIn}></Greeting>
      {button}      

      </div>

)
}

}

// Inline If with Logical && Operator

// You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:


function MailBox(props){
  const unreadMessage = props.unreadMessage
  const count =6
  const check = props.check
  return(
    <div>
      <h1>Hello</h1>
    {
      unreadMessage.length > 0 && <h1>you have {unreadMessage.length} message</h1>  
    }
{/* 
It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.

Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method. */}

    {
      count && <h1>message : {count}</h1>
    }

{/* Inline If-Else with Conditional Operator
Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false. */}
    
    
    {

      check ? <h1>Inline If-Else with Conditional Operator checking</h1> :<h1>false</h1>
    }
    </div>
    
    )
    
    
  }

  // Preventing Component from Rendering
  // In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.
  
  // In the example below, the <WarningBanner /> is rendered depending on the value of the prop called warn. If the value of the prop is false, then the component does not render:

  function WarningBanner(props) {
    if (!props.warn) {
      return null;
    }
  
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showWarning: true};
      this.handleToggleClick = this.handleToggleClick.bind(this);
    }
  
    handleToggleClick() {
      this.setState(state => ({
        showWarning: !state.showWarning
      }));
    }
  
    render() {
      return (
        <div>
          <WarningBanner warn={this.state.showWarning} />
          <button onClick={this.handleToggleClick}>
            {this.state.showWarning ? 'Hide' : 'Show'}
          </button>
        </div>
      );
    }
  }
  
  

  function App() {
    return (
    <div className="App">
      <LogInControl></LogInControl>
<MailBox unreadMessage={['React', 'Re: React', 'Re:Re: React']} check={true}></MailBox>
<Page></Page>
    </div>
  );
}

export default App;
