import React from 'react'

const Toolbar3 = ({onPlayMovie, onUploadSong}) => {
  return (
    <div 
        className='btn-toolbar' 
        onClick={() => {alert('You clicked on the toolbar!');}}
    >
        <Button onClick={onPlayMovie} className="play-btn">
            Play Movie
        </Button>
        <Button onClick={onUploadSong}>
            Upload Song
        </Button>
    </div>
  )
}

export default Toolbar3


const Button = ({onClick, children, className}) => {
    return(
        <button 
            onClick={(e) => {
                e.stopPropagation(); 
                onClick();
            }} 
            className={className}
        > 
            {children}
        </button>
    )
}