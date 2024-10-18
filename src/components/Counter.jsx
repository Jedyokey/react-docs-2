import React, { useState } from 'react'

const Counter = () => {
    const [score, setScore] = useState(0);

    const increment = () => {
        setScore(s => s + 1);
    }

  return (
    <div>
        <h2>Queueing a series of state updates </h2>
        <button 
            onClick={() => increment()} 
            style={{marginRight: "15px"}}
        >
            +1
        </button>
        <button 
            onClick={() => {
                increment()
                increment()
                increment()
            }}
        >
            +3
        </button>
        <h3>Score: {score}</h3>
    </div>
  )
}

export default Counter


export const UpdatingForms = () => {
    const [person, setPerson] = useState({
        name: "Franz Schubert",
        artwork: {
            title: "The Last Supper",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg"
        }
    });

    const handleNameChange = (e) => {
        setPerson({...person, name: e.target.value});
    }
    const handleTitleChange = (e) => {
        setPerson({...person, artwork: {
            ...person.artwork, title: e.target.value
        }});
    }
    const handleCityChange = (e) => {
        setPerson({...person, artwork: {
            ...person.artwork, city: e.target.value
        }});
    } 
    const handleImageChange = (e) => {
        setPerson({...person, artwork: {
            ...person.artwork, image: e.target.value
        }});
    } 

    return(
        <div>
            {/* Updating objects in state */}
            <label htmlFor="">
                Name:
                <input 
                    type="text" 
                    className='updateForm' 
                    value={person.name}
                    onChange={handleNameChange} 
                />
            </label>
            <label htmlFor="">
                Title:
                <input 
                    type="text" 
                    className='updateForm' 
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                /> 
            </label>
            <label htmlFor="">
                City:
                <input 
                    type="text" 
                    className='updateForm'
                    value={person.artwork.city} 
                    onChange={handleCityChange}
                /> 
            </label>
            <label htmlFor="">
                Image: 
                <input 
                    type="text" 
                    className='updateForm'
                    value={person.artwork.image}
                    onChange={handleImageChange} 
                /> 
            </label>

            <p>
                <i>{person.artwork.title} by {person.name}</i><br />
                (located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </div>
    )
}