import React, { useState } from 'react'

let nextId = 3;
const initialList = [
    {id: 0, title: "Everything", artist: "Victony", seen: false},
    {id: 1, title: "Goodbyes", artist: "Post Malone", seen: false},
    {id: 2, title: "Lifestyle", artist: "Lil Kesh", seen: true}
]

const BucketList = () => {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    const handleToggleMyList = (artworkId, nextSeen) => {
        setMyList(
            myList.map(artwork => {
                if (artwork.id === artworkId) {
                    // Create a new object with changes
                    return {...artwork, seen: nextSeen};
                } else {
                    // No changes
                    return artwork;
                }
            })
        )
    }

    const handleToggleYourList = (artworkId, nextSeen) => {
        setYourList(
            yourList.map(artwork => {
                if (artwork.id === artworkId) {
                    // Create a new object with changes
                    return {...artwork, seen: nextSeen};
                } else {
                    // No changes 
                    return artwork;
                }
            })
        )
    }

  return (
    <div>
        <h3>Art Bucket List</h3>
        <h4>My list of art to see:</h4>
        <ItemList 
            artworks={myList} 
            onToggle={handleToggleMyList} 
        />

        <h4>Your list of art to see:</h4>
        <ItemList 
            artworks={yourList} 
            onToggle={handleToggleYourList} 
        />
    </div>
  )
}

export default BucketList


const ItemList = ({artworks, onToggle}) => {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label htmlFor="">
                        <input 
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={
                                (e) => onToggle(artwork.id, e.target.checked)
                            } />  
                            {artwork.title} by {artwork.artist} 
                    </label>
                </li>
            ))}
        </ul>
    )
}