
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
//ek hook v import karna padega

import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ }) => {
  
  const contextObj=useContext(TodoItemsContext)
  const todoItems=contextObj.todoItems;
    TodoItemsContext
    return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;