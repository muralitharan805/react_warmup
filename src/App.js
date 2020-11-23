import './App.css';
import Counter from './Counter';
import HookCounter2 from './HookCounter2';
import HookCounter3 from './HookCounter3';
import HookCounter4 from './HookCounter4';
import HooksCounter from './HooksCounter';

function App() {
  return (
    <div className="App">
      <h1>this is React Hooks</h1>
      <Counter></Counter>
      <HooksCounter/>
      <HookCounter2></HookCounter2>
      <HookCounter3></HookCounter3>
      <HookCounter4></HookCounter4>
    </div>
  );
}

export default App;
