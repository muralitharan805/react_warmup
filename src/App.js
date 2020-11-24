import React,{ useReducer } from 'react';
import './App.css';
import ComA from './ComA';
import ComB from './ComB';
import ComC from './ComC';
import Counter from './Counter';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

export const CountContext = React.createContext()
const initialState=0
const reducer =(state,action)=>{
  switch(action){
    case 'increment':
    return state+1
    
    case 'decrement':
    return state-1
    
    case 'reset':
    return initialState

    default:
      return state
  }
  
}
function App() {

 const [count,dispatch]= useReducer(reducer,initialState)
  return (
    
    // {/* <Counter></Counter>
    //   <Counter2></Counter2>
    // <Counter3></Counter3> */}

      <CountContext.Provider value={{countstate:count,countDispath:dispatch}}>
      <div className="App">
    <h1>this is React Hooks Reducer</h1>
      Count:{count}
      <ComA></ComA>
      <ComB></ComB>
      <ComC></ComC>
    </div>
      </CountContext.Provider>

  );
}

export default App;
