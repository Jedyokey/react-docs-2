import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("Alice");
    const [message, setMessage] = useState("Hello");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${name}`);
        }, 3000);
    }

  return (
    <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="">
            To:{" "}
            <select 
                value={name}
                onChange={(e) => setName(e.target.value)}
            >
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Charlie">Charlie</option>
            </select>
        </label>

        <textarea 
            placeholder='message' 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}>
        </textarea>
        <button type='submit'>Send</button><br /><br />
    </form>
  )
}

export default Form
