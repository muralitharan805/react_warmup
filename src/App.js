import { useCallback, useState } from 'react';
import './App.css';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function App() {
  const [age,setAge]=useState(25)
  const [salary,setSalary]=useState(5000)

  const incrementAge=useCallback(
    ()=>{
      setAge(age+1)
    },[age]
  ) 

  const incrementSal=useCallback(
    ()=>{
      setSalary(salary+1000)
    },[salary]
  ) 
  return (
    <div className="App">
      <h1>this is basic setup</h1>
      <Title></Title>
      <Count text='age' count={age}></Count>
      <Button handleClick={incrementAge}>Increment Age</Button>

      <Count text='Salary' count={salary}></Count>
      <Button handleClick={incrementSal}>Increment salaryy</Button>
    
    </div>
  );
}

export default App;
