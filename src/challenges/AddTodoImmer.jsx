import React from 'react'
import { useImmer } from 'use-immer';

const AddTodoImmer = ({onAddTodo}) => {
    const [title, updateTitle] = useImmer("");

  return (
    <div>
        <input 
            type="text"
            placeholder='Add Todo'
            value={title}
            onChange={(e) => updateTitle(e.target.value)} />

            <button onClick={
                () => {
                    onAddTodo(title);
                    updateTitle('');
                } 
            }
            style={{marginLeft: "7px"}}>
                Add
            </button>
      
    </div>
  )
}

export default AddTodoImmer
