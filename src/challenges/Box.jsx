import React, { useState } from 'react'

const Box = ({ children, color, textColor, position, onMove }) => {
    const [lastCoordinates, setLastCoordinates] = useState(null);

    const handlePointerDown = (e) => {
        e.target.setPointerCapture(e.pointerId);
        setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
        });
    }

    const handlePointerMove = (e) => {
        if (lastCoordinates) {
            setLastCoordinates({
                x: e.clientX,
                y: e.clientY,
            });
            const dx = e.clientX - lastCoordinates.x;
            const dy = e.clientY - lastCoordinates.y;
            onMove(dx, dy);
        }
    }

    const handlePointerUp = (e) => {
        setLastCoordinates(null);
    }
  return (
    <div 
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        style={{
            width: 100,
            height: 100,
            cursor: 'grab',
            color: textColor,
            backgroundColor: color,
            position: 'absolute',
            border: '1px solid black',
            marginTop: "10px",
            borderRadius: "6px",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: `translate(
                ${position.x}px,
                ${position.y}px
              )`,
        }}
    >
        {children}
    </div>
      

  )
}

export default Box
