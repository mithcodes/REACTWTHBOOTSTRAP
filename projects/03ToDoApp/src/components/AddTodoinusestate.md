import React, { useState } from 'react';
import styles from './AddTodo.module.css'
import { MdOutlineLibraryAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName('');
    setDueDate('');
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input 
            type="text" 
            value={todoName} 
            onChange={(e) => setTodoName(e.target.value)} 
            placeholder="Enter Todo Here" 
          />
        </div>
        <div className="col-4">
          <input 
            type="date" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
          />
        </div>
        <div className="col-2">
          <button 
            type="button" 
            className="btn btn-success kg-button" 
            onClick={handleAddButtonClicked}
          >
            <MdOutlineLibraryAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
