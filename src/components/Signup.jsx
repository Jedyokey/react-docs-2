import React, {useState} from 'react'

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Logged in successfully");
        setUsername("");
        setPassword("");
    }

  return (
    <div>
      <form action="" 
            onSubmit={handleSubmit}
        >
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                id="username" 
                name="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <br />
            <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default Signup
