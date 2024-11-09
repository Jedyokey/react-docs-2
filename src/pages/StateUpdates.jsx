import React from 'react'
import Counter2 from '../components/Counter2'
import RequestTracker from '../challenges/RequestTracker'
// import MovingDot from '../components/MovingDot'
import UpdateObject from '../components/UpdateObject'
import UpdateNestedObj from '../components/UpdateNestedObj'
import UseImmer from '../components/UseImmer'

const StateUpdates = () => {
  return (
    <div>
      <h2>
        Updating the same state multiple times before the next render 
      </h2>
      <Counter2 />
      
      <h2>Challenge 1 of 2: Fix a request counter </h2>
      <RequestTracker />

      {/* <h2>Updating Objects in State</h2> 
      <MovingDot /> */}

      <h2>Updating Objects in State</h2>  
      <UpdateObject />

      <h2>Updating a Nested Objected</h2>
      <UpdateNestedObj />

      <h2>Write concise update logic with Immer</h2>
      <UseImmer />
    </div>
  )
}

export default StateUpdates
