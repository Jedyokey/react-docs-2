import React from 'react'
import ListArray from '../components/ListArray'
import RemoveArray from '../components/RemoveArray'
import ShapeEditor from '../components/ShapeEditor'
import CounterList from '../components/CounterList'

const UpdateArray = () => {
  return (
    <div>
        <h2>Updating Arrays in State (Add to an array)</h2>
        <ListArray />
      
        <h2>Removing from an array</h2>
        <RemoveArray />

        <h2>Transforming an array</h2>
        <ShapeEditor />

        <h2 style={{marginTop: "50px"}}>Replacing items in an array</h2>
        <CounterList />
    </div>
  )
}

export default UpdateArray
