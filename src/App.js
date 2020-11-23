import './App.css';
import ClassComponentOne from './ClassComponentOne';
import ClassMouse from './ClassMouse';
import HooksCounter1 from './HooksCounter1';
import HooksMouse from './HooksMouse';
import IntervelClassCounter from './IntervelClassCounter';
import IntervelHooks from './IntervelHooks';
import MouseContainer from './MouseContainer';

function App() {
  return (
    <div className="App">
      <h1>this is basic setup</h1>
      <ClassComponentOne></ClassComponentOne>
      <HooksCounter1></HooksCounter1>
      {/* <ClassMouse></ClassMouse> */}
      <MouseContainer></MouseContainer>
      <IntervelClassCounter></IntervelClassCounter>
      <IntervelHooks></IntervelHooks>
     </div>
  );
}

export default App;
