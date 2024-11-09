import React from 'react'

const Background = ({position}) => {
  return (
    <div style={{
        position: "absolute",
        transform: `translate(
            ${position.x}px, ${position.y}px
        )`,
        width: 350,
        height: 250,
        backgroundColor: "#8B0000",
        opacity: 0.2,
        zIndex: -1000,
        marginTop: "10px",
        borderRadius: "9px"
    }}
    
    />
      
   
  )
}

export default Background
