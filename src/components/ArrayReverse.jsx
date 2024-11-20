import React, { useState } from 'react'

const initialList = [
    {id: 0, title: "Tribaye", artist: "Burna Boy"},
    {id: 1, title: "Caravan", artist: "Passenger"},
    {id: 2, title: "Zombie", artist: "Joeboy"}
]

const ArrayReverse = () => {
    const [list, setList] = useState(initialList);

    const handleReverseClick = () => {
        // Don't use this => setList(list.reverse());
        const reverseList = [...list];
        reverseList.reverse();  // This will reverse the array in-place. 
        setList(reverseList);
    }
  return (
    <div>            
        <button 
            onClick={handleReverseClick}
            style={{marginBottom: "10px"}}>
            Reverse
        </button>   
        {list.map(artwork => (
            <li key={artwork.id}>
                {artwork.title} by {artwork.artist}
            </li>
        ))}
    </div>
  )
}

export default ArrayReverse
