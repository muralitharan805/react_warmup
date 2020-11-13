import './App.css';



function Name(user){
  return user.firstname+' '+user.lastname
}

const user = {
  firstname:"ramu",
  lastname:'K'
}
function App() {
  return (
    <div className="App">
      <h1>hello {Name(user)}</h1>
    </div>
  );
}

export default App;
