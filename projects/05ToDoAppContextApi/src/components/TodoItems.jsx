import { useContext } from "react";
// import { TodoItemsContext } from "../store/todo-items-store"; // Corrected import path
import TodoItem from "./TodoItem";

import "bootstrap/dist/css/bootstrap.min.css"
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "./store/todo-items-store";

const TodoItems = () => {
//   const { todoItems } = useContext(TodoItemsContext);
const  {todoItems}= useContext(TodoItemsContext)

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} key={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
