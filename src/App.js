import './App.css';



// Elements are the smallest building blocks of React apps.
// An element describes what you want to see on the screen:

// Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

// Updating the Rendered Element

// React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

// With our knowledge so far, the only way to update the UI is to create a new element, and pass it to ReactDOM.render().

// It calls ReactDOM.render() every second from a setInterval() callback.

// React Only Updates What’s Necessary
// React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.

// You can verify by inspecting the last example with the browser tools:




function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
  <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;
