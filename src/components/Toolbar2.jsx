import React from 'react'

const Toolbar2 = () => {
  return (
    <div className='btn-toolbar'>
        <PlayButton movieName="James Bond" className="play-btn" />
        <UploadButton />
    </div>
  )
}

export default Toolbar2


const PlayButton = ({movieName, className}) => {
    const handlePlayClick = () => {
        alert(`Playing ${movieName}!`);
    }

  return (
    <Button onClick={handlePlayClick} className={className}>
        Play {movieName} Movie
    </Button>  
  )
}


const UploadButton = () => {
  return (
    <div>
        <Button onClick={() => alert("Uploading!")}>
            Upload Image
        </Button>
    </div>
  )
}


const Button = ({ onClick, children, className }) => {
    return (
      <button onClick={onClick} className={className}> 
        {children}
      </button>
    )
  }