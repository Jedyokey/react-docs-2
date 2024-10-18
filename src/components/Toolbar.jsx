import React from 'react'

const Toolbar = ({onPlayMovie, onUploadImage}) => {
  return (
    <div>
        <Button onClick={onPlayMovie}>
            Play Movie
        </Button>
        <Button onClick={onUploadImage}>
            Upload Image
        </Button><br /> <br />
    </div>
  )
}

export default Toolbar


const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} style={{marginRight: "10px"}}>
        {children}
    </button>
  )
}
