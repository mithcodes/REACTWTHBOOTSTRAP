// TodoItem.js

// Import necessary modules and components
import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

// TodoItem component
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  // Access the deleteItem function from the context
  const { deleteItem } = useContext(TodoItemsContext);

  // Display a button to delete the todo item
  return (
    <div className="container">
      <div className="row kg-row">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

// Export the TodoItem component
export default TodoItem;
