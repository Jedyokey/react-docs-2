import React, { useState } from 'react'

let initialCounters = [ 0, 0, 0 ];

const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrementClick = (index) => {
    const nextCounters = counters.map((counter, i) => {
      if (i === index) {
        // Increment the clicked counter
        return counter + 1;
      } else {
         // The rest haven't changed
         return counter; 
      }
    });
    setCounters(nextCounters);
  }

  return (
    <div>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button
              style={{
                marginLeft: "10px", 
                marginBottom: "7px"
              }}
              onClick={() => {
                handleIncrementClick(i);
              }}>
              +1
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default CounterList
