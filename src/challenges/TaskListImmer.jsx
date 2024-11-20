import React from 'react'
import { useImmer } from 'use-immer';

const TaskListImmer = ({todos, onChangeTodo, onDeleteTodo}) => {
  return (
    <div>
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
      
    </div>
  )
}

export default TaskListImmer

const Task = ({todo, onChange, onDelete}) => {
    const [isEditing, updateIsEditing] = useImmer(false);
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
                    onClick={() => updateIsEditing(false)}>
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
                    onClick={() => updateIsEditing(true)}>
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