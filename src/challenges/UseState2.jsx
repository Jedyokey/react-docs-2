import React, { useState } from 'react'

const FeedbackForm = () => {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("");

    const handleMessageChange = (e) => {
        setMessage(e.target.value); 
    }
    if (isSent) {
        return <h2>Thank you for the feedback!</h2>
    }

  return (
    <div>
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: "${message}"`);
            setIsSent(true);
        }}>
            <textarea 
                name="" 
                id=""
                placeholder='Message' 
                value={message}
                onChange={handleMessageChange}
            />
            <button type='submit'>Send</button>
        </form>
      
    </div>
  )
}

export default FeedbackForm
