import './App.css';


function App() {
const name = "react"
const element = <h1>Hello, world!, this is {name}</h1>;
  return (
    <div className="App">
      <h1>{element}</h1>
    </div>
  );
}

export default App;
