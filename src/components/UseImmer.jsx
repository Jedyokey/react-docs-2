import React from 'react'
import { useImmer } from 'use-immer';

const UseImmer = () => {
    const [person, setPerson] = useImmer({
        name: 'Jedy++',
        artwork: {
            title: 'The Best of Codes are still Codes',
            city: 'Las Vegas',
            image: 'https://i.pinimg.com/474x/b8/96/51/b89651504282eab2f88f12678a14508c.jpg'
        }
    });

    // Updating nested state with Immer
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setPerson(
            produce(person, draft => {
                if (name === "name") {
                    draft.name = value;
                } else {
                    draft.artwork[name] = value;
                }
            })
        )
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

export default UseImmer
