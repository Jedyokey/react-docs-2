import React from 'react'
import AddTodoImmer from './AddTodoImmer'
import TaskListImmer from './TaskListImmer'
import { useImmer } from 'use-immer';

let nextId = 3;
const initialTodos = [
    {id: 0, title: "Go to school", done: true},
    {id: 1, title: "Prepare lunch", done: false},
    {id: 2, title: "Do some laundry", done: false}
];

const TaskAppImmer = () => {
    const [todos, updateTodos] = useImmer(initialTodos);

    const handleAddTodo = (title) => {
        // setTodos([...todos, {id: nextId++, title, done: false}])
        updateTodos(draft => {
            draft.push({id: nextId++, title, done: false});
        })
    }
    const handleChangeTodo = (nextTodo) => {
        updateTodos(draft => {
            const todo = draft.find(t => t.id === nextTodo.id);
            todo.done = nextTodo.done;
            todo.title = nextTodo.title;
        })
    }
    const handleDeleteTodo = (todoId) => {
        // setTodos(todos.filter((todo) => todo.id !== todoId))
        updateTodos(draft => {
            draft.splice(draft.findIndex(t => t.id === todoId), 1);
        })
    }

  return (
    <div>
        <h3>Task App with Immer</h3>
        <AddTodoImmer onAddTodo={handleAddTodo} />
        <TaskListImmer 
            todos={todos} 
            onChangeTodo={handleChangeTodo} 
            onDeleteTodo={handleDeleteTodo} 
        />
      
    </div>
  )
}

export default TaskAppImmer
