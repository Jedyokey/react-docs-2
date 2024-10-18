import React from 'react'
import Toolbar from '../components/Toolbar'
import Gallery from '../components/Gallery'
import Form from '../components/Form'
import Counter from '../components/Counter'
import { UpdatingForms } from '../components/Counter'
import FirstArray from '../components/FirstArray'

const Interactivity = () => {
  return (
    <div>
        <Toolbar 
            onPlayMovie={() => alert("Playing!")}
            onUploadImage={() => alert("Uploading")} 
        /> 
        <Gallery />

        <h2>State as a snapshot </h2>
        <Form /> 
        <Counter /> 

        <h2>Updating Objects in State</h2>
        <UpdatingForms />

        <h2>Updating Arrays in State</h2>
        <FirstArray />
    </div>
  )
}

export default Interactivity
