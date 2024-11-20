import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
    const [title, setTitle] = useState("");

  return (
    <div>
        <input 
            type="text"
            placeholder='Add Todo'
            value={title}
            onChange={(e) => setTitle(e.target.value)} />

            <button onClick={
                () => {
                    onAddTodo(title);
                    setTitle('');
                } 
            }
            style={{marginLeft: "7px"}}>
                Add
            </button>
      
    </div>
  )
}

export default AddTodo
