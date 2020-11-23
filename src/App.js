import './App.css';
import ClassComponentOne from './ClassComponentOne';
import ClassMouse from './ClassMouse';
import HooksCounter1 from './HooksCounter1';
import HooksMouse from './HooksMouse';

function App() {
  return (
    <div className="App">
      <h1>this is basic setup</h1>
      <ClassComponentOne></ClassComponentOne>
      <HooksCounter1></HooksCounter1>
      {/* <ClassMouse></ClassMouse> */}
      <HooksMouse></HooksMouse>
    </div>
  );
}

export default App;
