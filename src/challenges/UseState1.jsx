import React, { useState } from 'react'

const Form = () => { 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    const handleReset = (e) => {
        // e.preventDefault();
        alert("Form reset successfully");
        setFirstName("");
        setLastName("");
    } 

  return (
    <div>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                placeholder='First Name'
                value={firstName}
                onChange={handleFirstNameChange} 
            />
            <input 
                type="text" 
                placeholder='Last Name'
                value={lastName}
                onChange={handleLastNameChange}
            />
        </form>
        <h2>Hi, {firstName} {lastName}</h2> 
        <button type='submit' onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Form
