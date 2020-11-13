import './App.css';


const name = "react"
const element = <h1>Hello, world!, this is {name}</h1>;
function App() {
  return (
    <div className="App">
      <h1>{element}</h1>
    </div>
  );
}

export default App;
