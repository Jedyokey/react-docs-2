import React from 'react'
import InsertArray from '../components/InsertArray'
import ArrayReverse from '../components/ArrayReverse'
import ObjectsInArray from '../components/ObjectsInArray'
import ArrayWithImmer from '../components/ArrayWithImmer'

const UpdateArray2 = () => {
  return (
    <div>
        <h2>Inserting into an array</h2>
        <InsertArray />

        <h2>Making other changes to an array (Reverse)</h2>
        <ArrayReverse />

        <h2>Updating objects inside arrays</h2>
        <ObjectsInArray />

        <h2>Write concise update logic with Immer</h2>
        <ArrayWithImmer />
    </div>
  )
}

export default UpdateArray2
