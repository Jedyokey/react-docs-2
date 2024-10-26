import React, { useState } from 'react'
import Toolbar2 from '../components/Toolbar2'
import Toolbar3 from '../components/Toolbar3'
import Signup from '../components/Signup'
import LightSwitch from '../challenges/LightSwitch'
import ColorSwitch from '../challenges/ColorSwitch'

const EventResponse = () => {
  const [clicks, setClicks] = useState(0);

  const handleClicksOutside = () => {
    setClicks((c) => c + 1);
  }
  const getRandomLightColor = () => {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());

    return `rgb(${r}, ${g}, ${b})`;
  }

  const handleColorChange = () => {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div onClick={handleClicksOutside}>
        <h2>Passing event handlers as props</h2>
        <Toolbar2 />
    
        <h2>Stopping Propagation</h2>
        <Toolbar3
          onPlayMovie={() => alert("Playing Now!")}
          onUploadSong={() => alert("Uploaded Successfully!")} 
        /> 

        <h2>Preventing default behavior </h2>
        <Signup /> 

        <h2>Challenge 1 (Fix an event handler)</h2>
        <LightSwitch />

        <h2>Challenge 2 (Wire up the events)</h2>
        <ColorSwitch onChangeColor={handleColorChange} />
        <h2>Clicks on the page: {clicks}</h2>
    </div>
  )
}

export default EventResponse
