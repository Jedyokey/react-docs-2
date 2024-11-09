import React, { useState } from 'react'

const Counter2 = () => {
    const [number, setNumber] = useState(0);

  return (
    <div>
        <span style={{marginRight: "25px"}}>
            <b>{number}</b>  
        </span>
        <button onClick={() => {
            setNumber(number + 4)
            setNumber(n => n + 1);
            setNumber(n => n + 1);
            setNumber(n => n + 1); // Updating state after replacing it 
            setNumber(42); // Replacing state after updating it 

        }}>
            Increase the number
        </button>
      
    </div>
  )
}

export default Counter2
