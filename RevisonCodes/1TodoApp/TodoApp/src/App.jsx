import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import AppName from './components/AppName'
import TodoItems from './components/TodoItems'

function App() {
  
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AddTodo></AddTodo>
      <AppName/>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  )
}

export default App
