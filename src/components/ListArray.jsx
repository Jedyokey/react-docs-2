import React, { useState } from 'react'

let nextId = 0;

const ListArray = () => {
    const [name, setName] = useState("");
    const [artists, setArtists] = useState([]);

  return (
    <div>
        <h2>Inspiring Sculptors</h2>
        <input 
            type="text" 
            style={{marginRight: "10px"}}
            value={name} 
            onChange={(e) => {
                setName(e.target.value)
            }} />
        <button onClick={() => {
            setArtists([
                ...artists, 
                {id: nextId++, name: name} 
                // Put new item at the beginning
                // { id: nextId++, name: name },
                // ...artists // Put old items at the end
            ]);
            setName("");
        }}>
            Add
        </button>
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>{artist.name}</li>
            ))} 
        </ul>
    </div>
  )
}

export default ListArray
