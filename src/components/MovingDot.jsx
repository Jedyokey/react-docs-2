import React, { useState } from 'react'

const MovingDot = () => {
    const [position, setPosition] = useState({x: 0, y: 0})

    // Uncomment the following line to update the position using a new object
    // const nextPosition = {};
    // nextPosition.x = e.clientX;
    // nextPosition.y = e.clientY;
    // setPosition(nextPosition);

  return (
    <div 
        onPointerMove={
          (e) => setPosition({x: e.clientX, y: e.clientY})
          }
          style={{
              position: "relative",
              width: "100vw",
              height: "100vh"
          }}
      >
      
      <div style={{
        position: "absolute",
        backgroundColor: "red",
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20
      }}>
      </div>
    </div>
  )
}

export default MovingDot
