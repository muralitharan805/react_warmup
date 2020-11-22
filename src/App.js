import './App.css';
import Err from './Err';
import Hero from './Hero';

function App() {
  return (
    <div className="App">
      <h1>this is Error handling</h1>
      <Err>

      <Hero name="Murali"></Hero>
      <Hero name="Mural"></Hero>
      <Hero name="kkk"></Hero>
      </Err>
    </div>
  );
}

export default App;
