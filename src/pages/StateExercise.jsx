import React from 'react'
import Scoreboard from '../challenges/Scoreboard'
import Canvas from '../challenges/Canvas'

const StateExercise = () => {
  return (
    <div>
        <h2>Try out some challenges (updating objects in state)</h2>
      
        <h2>Challenge 1 of 3: Fix incorrect state updates </h2>
        <Scoreboard />

        <h2>Challenge 2 of 3: Find and fix the mutation</h2>
        <Canvas />
    </div>
  )
}

export default StateExercise
