import React from 'react'
import { useImmer } from 'use-immer';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

const ArrayWithImmer = () => {
    const [myList, updateMyList] = useImmer(initialList);
    const [yourList, updateYourList] = useImmer(initialList);

    const handleToggleMyList = (id, nextSeen) => {
        updateMyList(draft => {
            const artwork = draft.find(a => a.id === id);
            artwork.seen = nextSeen;
        })
    }

    const handleToggleYourList = (artworkId, nextSeen) => {
        updateYourList(draft => {
            const artwork = draft.find(a => a.id === artworkId);
            artwork.seen = nextSeen;
        })
        
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

export default ArrayWithImmer

const ItemList = ({artworks, onToggle}) => {
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label htmlFor="">
                        <input 
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => {
                                onToggle(artwork.id, e.target.checked)
                            }} 
                        />
                            {artwork.title}
                    </label>
                </li>   
            ))}
        </ul>
    )
}