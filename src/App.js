import React from 'react'
import './App.css';
import { useState } from 'react';
function App() {
  let [counter, setCounter] = useState(0);
  return <>
    
    <div className="container">
   
      <button className='minus' disabled={counter === 0} onClick={() => {
        if (counter > 0) {
          setCounter(counter - 1)
        }
      }}>-</button>
      <h3>{counter}</h3>
      <button className='plus' disabled={counter === 20} onClick={() => {
        if (counter < 20) {
          setCounter(counter + 1)
        }
      }}>+</button>
    </div>
  </>
} 
export default App