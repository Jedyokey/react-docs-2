import React from 'react'
import Form from '../challenges/UseState1'
import FeedbackForm from '../challenges/UseState2'
import UseState3 from '../challenges/UseState3'

const UseStatePage = () => {
  return (
    <div>
        <h2>Challenge 1 of 3: Fix stuck form inputs</h2>
        <Form />  
      
        <h2>Challenge 2 of 3: Fix a crash </h2>
        <FeedbackForm /> 

        <h2>Challenge 3 of 3: Remove unnecessary state </h2>
        <UseState3 />
    </div>
  )
}

export default UseStatePage
