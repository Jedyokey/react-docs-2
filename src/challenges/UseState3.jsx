import React from 'react'

const UseState3 = () => {
    // const [name, setName] = useState("");
    // const name = "What is your name?"

    const handleClick = () => {
        const name = prompt("What is your name?"); 
        (alert(`Hi, ${name}`));
    }
  return (
    <div>
        <button onClick={handleClick}>Greet</button>
      
    </div>
  )
}

export default UseState3
