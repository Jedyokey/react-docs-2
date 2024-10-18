import React, { useState } from 'react'
import { sculptureList } from '../js_files/data'

const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const hasNext = index < sculptureList.length - 1;
    const hasPrev = index > 0;

    const handleNextClick = () => {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    const handlePrevClick = () => {
        if (hasPrev) {
            setIndex(index - 1);
        } else {
            setIndex(sculptureList.length - 1);
        }
    }

    const handleMoreClick = () => {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

  return (
    <div>
        <h2>State: a component’s memory </h2>
        <button onClick={handlePrevClick} style={{marginRight: "15px"}}>
            Prev
        </button>
        <button onClick={handleNextClick}>Next</button> 
        <h2>
            <i>{sculpture.name}</i>
            by {sculpture.artist}
        </h2>

        <h3> 
            ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
            {showMore ? "Hide" : "Show"} details 
        </button><br /><br /> 
        {showMore && <p>{sculpture.description}</p>}
        <img src={sculpture.url} alt={sculpture.alt} /> 
      
    </div> 
  )
}

export default Gallery
