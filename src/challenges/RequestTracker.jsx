import React, { useState } from 'react'

const RequestTracker = () => {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    const handleClick = () => {
        // Increase pending count immediately
        setPending(p => p + 1);
        // Schedule the decrement of pending and increment of completed
        setTimeout(() => {
            setPending(p => p - 1);  
            alert("Request completed!");  
            setCompleted(c => c + 1);
        }, 3000);
    }

  return (
    <div>
        <h3>Pending {pending}</h3>
        <h3>Completed {completed}</h3>
        <button onClick={handleClick}>
            Buy
        </button>  
      
    </div> 
  )
}

export default RequestTracker
