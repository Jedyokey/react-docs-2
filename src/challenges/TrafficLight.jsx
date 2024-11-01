import React, { useState } from 'react'

const TrafficLight = () => {
    const [walk, setWalk] = useState(true);

    const handleClick = () => {
        setWalk(!walk);
        alert(walk ? "Stop is next" : "Walk is next");
    }

  return (
    <div>
        <button onClick={handleClick}>
            Change to {walk ? "Stop" : "Walk"}
        </button>
      
      <h1 style={{color: walk ? "darkgreen" : "darkred"}}>
        {walk ? "Walk" : "Stop"}
      </h1>
    </div>
  )
}

export default TrafficLight
