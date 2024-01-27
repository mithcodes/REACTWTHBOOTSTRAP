import React, { useReducer } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  return newTodoItems;
};

function App() {
  // const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  // const addNewItem = (itemName, itemDueDate) => {
  //   const newItemAction = {
  //     type: "NEW_ITEM",
  //     payload: {
  //       itemName,
  //       itemDueDate,
  //     },
  //   };
  //   dispatchTodoItems(newItemAction);
  // };

  // const deleteItem = (todoItemName) => {
  //   const deleteItemAction = {
  //     type: "DELETE_ITEM",
  //     payload: {
  //       itemName: todoItemName,
  //     },
  //   };
  //   dispatchTodoItems(deleteItemAction);
  // };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;





// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import TodoItems from "./components/TodoItems";
// import WelcomeMessage from "./components/WelcomeMessage";
// import "./App.css";
// import { useState,useReducer } from "react";
// import { TodoItemsContext } from "./store/todo-items-store";


// const todoItemReducer = (currTodoItems, action) => {
//   let newTodoItems = currTodoItems;

//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItems,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItems.filter(
//       (item) => item.name !== action.payload.itemName
//     );
//   }

//   return newTodoItems;
// };



// function App() {
//  // const [todoItems, setTodoItems] = useState([]);

//   const [todoItems,dispatchTodoItems]=useReducer(todoItemReducer,[])

//   const addNewItem = (itemName, itemDueDate) => {
// const newItemAction={
//   type:"NEW_ITEM",
//   payload:{
//     itemName,
//     itemDueDate,
//   }
// }
// dispatchTodoItems(newItemAction)

//   //   console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
//   //   const newTodoItems = [
//   //     ...todoItems,
//   //     { name: itemName, dueDate: itemDueDate },
//   //   ];
//   //   setTodoItems(newTodoItems);
//   // };
 
//   // const deleteItem = (todoItemName) => {
    
//   //   // seconst newTodoItems = todoItems.filter((item) => item.name !== todoItemName);tTodoItems(newTodoItems);
//   //   const deleteItemAction={
//   //     type:"DELETE_ITEM",
//   //     payload:{
//   //       itemName:todoItemName,
        
//   //     }
//   //   }
//   //   dispatchTodoItems(deleteItemAction)
    
//   // };
//   // ...

// const deleteItem = (todoItemName) => {
//   // Instead of commenting out this line, fix the typo in the comment
//   // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//   const deleteItemAction = {
//     type: "DELETE_ITEM",
//     payload: {
//       itemName: todoItemName,
//     }
//   }
//   dispatchTodoItems(deleteItemAction);
// };

// // ...


//   return (
//     //js mai agar value or key same ho to hm asa bhi pass kar sakta han
//     <TodoItemsContext.Provider value={{
//       // todoItems:todoItems,
//       // addNewItem:addNewItem,
//       // DeleteItem:deleteItem,

//       todoItems,
//       addNewItem,
//       deleteItem,
//     }}>
//     <center className="todo-container">
//       <AppName />
//       <AddTodo  />
//       {/* {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>} */}
//       <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
//       <TodoItems
        
//       ></TodoItems>
//     </center>
//     </TodoItemsContext.Provider>
//   );
// }

// export default App;