import React, { useState } from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'

let nextId = 3;
const initialTodos = [
    {id: 0, title: "Buy milk", done: true},
    {id: 1, title: "Eat noodles", done: false},
    {id: 2, title: "Get some items", done: false}
];

const TaskApp = () => {
    const [todos, setTodos] = useState(initialTodos);

    const handleAddTodo = (title) => {
        setTodos([...todos, {id: nextId++, title, done: false}])
    }
    const handleChangeTodo = (nextTodo) => {
        setTodos(todos.map((todo) => {
            if (todo.id === nextTodo.id) {
                return nextTodo;
            } else {
                return todo;
            }
        }))
    }
    const handleDeleteTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId))
    }
  return (
    <div>
        <h3>Task App</h3>
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskList 
            todos={todos} 
            onChangeTodo={handleChangeTodo} 
            onDeleteTodo={handleDeleteTodo} 
        />
      
    </div>
  )
}

export default TaskApp
