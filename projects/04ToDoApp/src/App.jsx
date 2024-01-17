import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    //js mai agar value or key same ho to hm asa bhi pass kar sakta han
    <TodoItemsContext.Provider value={{
      // todoItems:todoItems,
      // addNewItem:addNewItem,
      // DeleteItem:deleteItem,

      todoItems,
      addNewItem,
      deleteItem,
    }}>
    <center className="todo-container">
      <AppName />
      <AddTodo  />
      {/* {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>} */}
      <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoItems
        
      ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;