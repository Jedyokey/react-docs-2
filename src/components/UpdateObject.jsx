import React, { useState } from 'react'

const UpdateObject = () => {
    const [person, setPerson] = useState({
        firstName: "Lewis",
        lastName: "Hamilton",
        email: "lewishamilton29@gmail.com"
    });

    const handleFirstName = (e) => {
        setPerson({...person, firstName: e.target.value});
    }
    const handleLastName = (e) => {
        setPerson({...person, lastName: e.target.value});
    }
    const handlEmail = (e) => {
        setPerson({...person, email: e.target.value});
    }

    //Using one event handler to update all input change
    const handleInputChange = (e) => {
        setPerson({
            ...person, [e.target.name]: e.target.value
        })
        // Here, e.target.name refers to the name property given to the <input> DOM element.
    }

  return (
    <div>
        <label htmlFor="">
            First Name: 
            <input 
                type="text" 
                placeholder='first name'
                name="firstName"
                value={person.firstName}
                onChange={handleFirstName} />
        </label>

        <label htmlFor="">
            Last Name: 
            <input 
                type="text" 
                placeholder='last name'
                 name="lastName"
                value={person.lastName}
                onChange={handleLastName} />
        </label>

        <label htmlFor="">
            Email: 
            <input 
                type="email" 
                placeholder='your email'
                name="email"
                value={person.email}
                onChange={handlEmail} />
        </label>

        <p>
            {person.firstName} {" "} {person.lastName}<br />
            {person.email}
        </p>
    </div>
  )
}

export default UpdateObject
