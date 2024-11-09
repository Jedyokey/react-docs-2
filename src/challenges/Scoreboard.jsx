import React, { useState } from 'react'

const Scoreboard = () => {
    const [player, setPlayer] = useState({
        firstName: "Jerry",
        lastName: "Michael",
        score: 10
    });

    const handleClick = () => {
        // player.score++
        setPlayer({...player, score: player.score + 1})
    }

    const handleFirstName = (e) => {
        setPlayer({...player, firstName: e.target.value});
    }
    const handleLastName = (e) => {
        setPlayer({...player, lastName: e.target.value});
    }
  return (
    <div>
        <label htmlFor="">
            Score: <b>{player.score}</b>
            <button style={{marginLeft: "10px"}} onClick={handleClick}>
                +1
            </button>
        </label>

        <label htmlFor="">
            First name:
            <input 
                type="text" 
                name="" 
                id=""
                value={player.firstName}
                onChange={handleFirstName} />
        </label>
      
        <label htmlFor="">
            Last name:
            <input 
                type="text" 
                name="" 
                id=""
                value={player.lastName}
                onChange={handleLastName} />
        </label>
    </div>
  )
}

export default Scoreboard
