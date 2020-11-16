import './App.css';



// Lists and Keys

// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

function List_Example(props){
  const tem = props.list
  const listItem = tem.map((item)=>{
    return <li key={item.toString()}>item</li>
  })
  return(
    <ul>
      {listItem}
    </ul>
  )

}


// Extracting Components with Keys

function List(props){
  return (
    
    <li>
      {
props.value   
      }
    </li>
  )
}

function List_Example_Extract(props){
  const numbers = props.list

  const listItem = numbers.map((items)=>{
    return <List key={items.toString() } value={items}></List>
  })

  return (
    <ul>
 {
      listItem
    }
    </ul>
   
  )
}


// Embedding map() in JSX
// Sometimes this results in clearer code, but this style can also be abused. Like in JavaScript, it is up to you to decide whether it is worth extracting a variable for readability. Keep in mind that if the map() body is too nested, it might be a good time to extract a component.
function Emberdding(props) {
  const number = props.list
  return (
    <ul>
      {
        number.map((item)=>(
          <List key={item.toString() } value={item}></List>)
        )
      }
    </ul>
  )
  
}
function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <List_Example list={numbers}></List_Example>
      <List_Example_Extract list={numbers}></List_Example_Extract>
      <Emberdding list={numbers}></Emberdding>
    </div>
  );
}

export default App;
