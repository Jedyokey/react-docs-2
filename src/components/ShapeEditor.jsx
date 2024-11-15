import React, { useState } from 'react'

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 530},
    {id: 1, type: 'square', x: 150, y: 530},
    {id: 2, type: 'circle', x: 250, y: 530}
]

const ShapeEditor = () => {
    const [shapes, setShapes] = useState(initialShapes);
    // const [resetShapes, setResetShapes] = useState(initialShapes);

    const handleClick = () => {
        const nextShapes = shapes.map(shape => {
            if (shape.type === "square") {
                // No change
                return shape; 
            } else {
                // Return a new circle 50px below
                return {...shape, y: shape.y + 50}
            }
        });
        // Re-render with the new array
        setShapes(nextShapes);
    }
    const handleResetShapes = () => {
        // Reset to the original state
        setShapes(initialShapes); 
    }

  return (
    <div>
        <button onClick={handleClick}>
            Move Circle Down!
        </button>
        <button onClick={handleResetShapes} style={{marginLeft: "10px"}}>
            Reset Shapes
        </button>
        {shapes.map(shape => (
            <div 
                key={shape.id}
                style={{
                    background: "purple",
                    position: "absolute",
                    left: shape.x,
                    top: shape.y,
                    marginTop: "20px",
                    borderRadius: shape.type === "circle" ? "50%" : "",
                    width: shape.type === "circle" ? "20px" : "25px",
                    height: shape.type === "circle" ? "20px" : "25px"
                }}
            />
        ))}
    </div>
  )
}

export default ShapeEditor
