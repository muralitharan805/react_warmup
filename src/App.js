import './App.css';

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

function App() {
  return (
    <div className="App">
      <Greeting isLoggedIn={false}></Greeting>
    </div>
  );
}

export default App;
