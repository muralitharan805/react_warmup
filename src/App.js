import './App.css';

// In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:

const name = 'raja';
const element = <h1>Hello, {name}</h1>;
// You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

// In the example below, we embed the result of calling a JavaScript function, formatName(user), into an <h1> element



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
      <h1>{element}</h1>
    </div>
  );
}

export default App;
