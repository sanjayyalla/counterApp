// import React from 'react'
// import './App.css';
// import { useState } from 'react';
// function App() {
//   let [counter, setCounter] = useState(0);
//   return <>
    
//     <div className="container">
   
//       <button className='minus' disabled={counter === 0} onClick={() => {
//         if (counter > 0) {
//           setCounter(counter - 1)
//         }
//       }}>-</button>
//       <h3>{counter}</h3>
//       <button className='plus' disabled={counter === 20} onClick={() => {
//         if (counter < 20) {
//           setCounter(counter + 1)
//         }
//       }}>+</button>
//     </div>
//   </>
// } 
// export default App


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [counter, setCounter] = useState(0);

//   const decrementCounter = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   const incrementCounter = () => {
//     if (counter < 20) {
//       setCounter(counter + 1);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="title">Counter App</div>
//       <div className="counter-form">
//         <button className="button minus" disabled={counter===0} onClick={decrementCounter}>
//           -
//         </button>
//         <h3 className="counter">{counter}</h3>
//         <button className="button plus" disabled={counter===20} onClick={incrementCounter}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(20);
  const [newLimit, setNewLimit] = useState(20);

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const incrementCounter = () => {
    if (counter < limit) {
      setCounter(counter + 1);
    }
  };

  const handleLimitChange = (e) => {
    setNewLimit(parseInt(e.target.value));
  };

  const handleLimitUpdate = () => {
    setLimit(newLimit);
    if (counter > newLimit) {
      setCounter(newLimit);
    }
  };

  return (
    <div className="container">
      <div className="title">Counter App</div>
      <div className="limit-form">
        <input
          type="number"
          value={newLimit}
          onChange={handleLimitChange}
          min="1"
          max="100"
          className="limit-input"
        />
        <button className="buttonnew ok" onClick={handleLimitUpdate}>
          OK
        </button>
        
      </div>
      <br></br>
      <div className="counter-form">
        <button className="button minus" disabled={counter===0} onClick={decrementCounter}>
          -
        </button>
        <h3 className="counter">{counter}</h3>
        <button className="button plus" disabled={counter===limit} onClick={incrementCounter}>
          +
        </button>
      </div>
      
    </div>
  );
}

export default App;
