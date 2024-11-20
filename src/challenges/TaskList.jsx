import React, { useState } from 'react'

const TaskList = ({todos, onChangeTodo, onDeleteTodo}) => {
  return (
    <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                <Task
                    todo={todo}
                    onChange={onChangeTodo}
                    onDelete={onDeleteTodo} 
                /> 
            </li>
        ))}
    </ul>
    
  )
}

export default TaskList

const Task = ({todo, onChange, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <input 
                    type="text"
                    value={todo.title}
                    onChange={(e) => {
                        onChange({...todo, title: e.target.value});
                    }} 
                />
                <button 
                    style={{margin: "0 9px"}}
                    onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        todoContent = (
            <>
                <span>{todo.title}</span>
                <button 
                    style={{margin: "0 7px"}}
                    onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }
    return (
        <label htmlFor="">
            <input 
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                   onChange({
                    ...todo, done: e.target.checked
                   })
                }} 
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    )
}