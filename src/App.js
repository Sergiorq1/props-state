import './App.css';
import Counter from './Counter'
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState([ 4, 8, 0 ])
  return (
    <div className="App">
      {count.map((val, i) => (
        <Counter
          //second argument, iteration
          label={`Counter: ${i+1}`}
          //first argument, value 
          value={val}
          //delete function
          deleteCount={() =>{
            const newCount = [ ...count]
            newCount[i] = count.slice(i, 1)
            setCount(newCount)
          }}
          //increment function
          increment={() => {
            //copied array
            const newCount = [ ...count]
            //modified new array
            newCount[i] = val + 1
            // updated state, causing component to rerender
            setCount(newCount)
          }}
          //same as increment, except opposite
          decrement={() => {
            const newCount = [ ...count]
            newCount[i] = val -1
            setCount(newCount)
          }}
        />
      ))}
      <h2>Total: {count.reduce((acc, val) => acc + val, 0)}</h2>
      <button onClick={() => {
        const newCount = [ ...count]
        newCount.push(0)
        setCount(newCount)
      }}>Add counter</button>

    </div>
  );
}

export default App;
