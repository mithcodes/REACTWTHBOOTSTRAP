import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  // Map through todoItems and render TodoItem component for each item
  return (
    // Apply Bootstrap classes for styling the container of todo items
    <div className="d-flex flex-column align-items-center">
      {todoItems.map((item) => (
        // Render each TodoItem component
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={() => deleteItem(item.name)}
        />
      ))}
    </div>
