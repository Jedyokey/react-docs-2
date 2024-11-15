import React, { useState } from 'react'

let nextId = 3;
let initialArtists = [
    {id: 0, name: "Louise Nevelson"},
    {id: 1, name: "Leiko Ikemura"},
    {id: 2, name: "Otobong Nkanga"}
]

const InsertArray = () => { 
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  const handleClick = () => {
    const insertAt = 3; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt), 
      // New item:
      {id: nextId++, name: name},
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <div>
        <h3>We Inspire Sculptors</h3>
        <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} />

        <button 
          onClick={handleClick}
          style={{marginLeft: "10px"}}>
            Insert
        </button>
      
        <ul>
          {artists.map(artist => (
            <li key={artist.id}>
              {artist.name} 
            </li>
          ))}
        </ul>
    </div>
  )
}

export default InsertArray


// To add items to the last on the list of an array

// const handleClick = () => {
//   const nextArtists = [
//     ...artists, // Spread all current items
//     {id: nextId++, name: name} // New item to add at the end
//   ];
//   setArtists(nextArtists); // Update state with the new array
//   setName(""); // Clear the input
// }


// To add items to the first on the list in an array

// const handleClick = () => {
//   const nextArtists = [
//     {id: nextId++, name: name}, // New item to add at the beginning
//     ...artists // Spread all current items
//   ];
//   setArtists(nextArtists); // Update state with the new array
//   setName(""); // Clear the input
// }