import React, { useState } from 'react'

let initialArtists = [
    {id: 0, name: "Marta Colvin Andrade"},
    {id: 1, name: "Lamidi Olonade Fakeye"},
    {id: 2, name: "Louise Nevelson"},
    {id: 3, name: "Leiko Ikemura"},
    {id: 4, name: "Otobong Nkanga"}
]

const ListArray2 = () => {
    const [artists, setArtists] = useState(initialArtists);
  return (
    <div>
        <h2>Inspiring Sculptors</h2>
        <ul>
            {artists.map(artist => (
                <li key={artist.id}>
                    {artist.name} {" "}
                    <button onClick={() => {
                        setArtists(artists.filter(a => 
                            a.id !== artist.id
                        ));
                    }}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default ListArray2
