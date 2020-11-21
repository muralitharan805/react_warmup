import './App.css';


// Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.


function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FancyBorder color="green">

      <h1>this is React Compostion</h1>
      </FancyBorder>
    </div>
  );
}

export default App;
