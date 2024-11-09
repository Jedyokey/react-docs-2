import React, { useState } from 'react'

const UpdateNestedObj = () => {
  const [person, setPerson] = useState({
    name: "Jacob Wilson",
    artwork: {
      title: "Christ Sketch",
      city: "Abuja",
      image: "https://i.pinimg.com/736x/f2/b5/df/f2b5df5fb42b5f8799a69b148e0b51f5.jpg"
    }
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    if(["title", "city", "image"].includes(name)) {
      // Update nested artwork properties
      setPerson({
        ...person,
        artwork: {
          ...person.artwork,
          [name]: value
        }
      });
    } else {
      // Update top-level properties
      setPerson({
        ...person,
        [name]: value
      })
    }
  }
    
  return (
    <div>
      <label htmlFor="">
            Name: 
            <input 
                type="text" 
                placeholder='first name'
                name='name'
                value={person.name}
                onChange={handleInputChange} />
        </label>
        
        <label htmlFor="">
            Title: 
            <input 
                type="text" 
                placeholder='last name'
                name='title'
                value={person.artwork.title}
                onChange={handleInputChange} />
        </label>

        <label htmlFor="">
            City: 
            <input 
                type="text" 
                placeholder='your email'
                name='city'
                value={person.artwork.city}
                onChange={handleInputChange} />
        </label>

        <label htmlFor="">
            Image: 
            <input 
                type="text" 
                placeholder='your email'
                name='image'
                value={person.artwork.image}
                onChange={handleInputChange} />
        </label>

        <p>
          <i>{person.artwork.title} by {person.name}</i><br />
          (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} alt={person.artwork.title} className='imageArt' />
    </div>
  )
}

export default UpdateNestedObj


function handleNameChange(e) {
  setPerson({
    ...person,
    name: e.target.value
  });
}

function handleTitleChange(e) {
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      title: e.target.value
    }
  });
}

function handleCityChange(e) {
  setPerson({
    ...person,
    artwork: {
      ...person.artwork,
      city: e.target.value
    }
  })
}