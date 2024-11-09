import React from 'react'
// import { useState } from 'react';
import Background from './Background'
import Box from './Box'
import { useImmer } from 'use-immer';

const initialPosition = {
    x: 0,
    y: 0
};

const Canvas = () => {
    // const [shape, setShape] = useState({
    //     color: "orange",
    //     position: initialPosition
    // });

    const [shape, updateShape] = useImmer({
        color: "orange",
        position: initialPosition
    });

    const handleMove = (dx, dy) => {
        // setShape({
        //     ...shape, 
        //     position: {
        //         ...shape.position, 
        //         x: shape.position.x + dx, 
        //         y: shape.position.y + dy
        //     }
        // });

            updateShape(draft => {
                draft.position.x += dx;
                draft.position.y += dy;
            })
        
    }

    const handleColorChange = (e) => {
        // setShape({...shape, color: e.target.value});
            updateShape(draft => {
                draft.color = e.target.value;
            })
        
    }

    const textColor = (shape.color === "yellow" || shape.color === "orange") ?
                         "black" : "white"

  return (
    <div>
        <select 
            value={shape.color}
            onChange={handleColorChange}>
                <option value="red">Orange</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Red</option>
        </select>

        <Background position={initialPosition} />
        <Box
            color={shape.color}
            textColor={textColor}
            position={shape.position}
            onMove={handleMove} 
        >
            Drag me!
        </Box>
      
    </div>
  )
}

export default Canvas
