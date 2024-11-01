import React, { useState } from 'react'

const Form2 = () => {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("Hi");

    if (isSent) {
        return <h3>Your message is on the way!</h3>
    }

  return (
    <div>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            if (message.trim() === "") {
                alert("Please enter a message!");
                return;
            } 
            alert(`Sending: "${message}"`);
            setIsSent(true);
        }}>
            <textarea 
                placeholder='Message!'
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
            <button>Send</button>
        </form>
      
    </div>
  )
}

export default Form2
