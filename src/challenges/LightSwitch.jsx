import React from 'react'

const LightSwitch = () => {
    const handleClick = () => {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === "black") {
            bodyStyle.backgroundColor = "aliceblue";
            bodyStyle.color = "black";
        } else {
            bodyStyle.backgroundColor = "black";
            bodyStyle.color = "white";
        }
    }

  return (
    <div>
        <button onClick={handleClick}>Toggle the lights</button>
    </div>
  )
}

export default LightSwitch
