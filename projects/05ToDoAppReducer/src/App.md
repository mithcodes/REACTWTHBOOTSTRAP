// Importing necessary components and styles
import AppName from './components/AppName';
import AddTodo from './components/AddTodo';
import TodoItems from './components/TodoItem';

import './App.css';

// Importing necessary hooks and context
import { useReducer} from 'react';
import { TodoItemsContext } from './components/store/todo-items-store';

import AppName from './components/AppName'; - This line imports the AppName component from the ./components/AppName.js file.
import AddTodo from './components/AddTodo'; - This line imports the AddTodo component from the ./components/AddTodo.js file.
import TodoItems from './components/TodoItem'; - This line imports the TodoItems component from the ./components/TodoItem.js file.
import './App.css'; - This line imports the App.css file, which contains styles for the App component.
import { useReducer} from 'react'; - This line imports the useReducer hook from the react library. The useReducer hook is used to manage state in functional components.
import { TodoItemsContext } from './components/store/todo-items-store'; - This line imports the TodoItemsContext context from the ./components/store/todo-items-store.js file. The TodoItemsContext context is used to provide state and event handlers to child components.





// Defining the reducer function
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate }
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}
const todoItemsReducer = (currTodoItems, action) => { - This line defines a reducer function called todoItemsReducer that takes two arguments: the current state (currTodoItems) and an action (action).
let newTodoItems = currTodoItems; - This line initializes a variable called newTodoItems with the value of the current state.
if (action.type === "NEW_ITEM") { - This line checks if the action type is NEW_ITEM.
newTodoItems = [...currTodoItems, { name: action.payload.itemName, dueDate: action.payload.itemDueDate }]; - This line creates a new array with the existing todo items (...currTodoItems) and adds a new item to it. The new item has a name and dueDate property, which are taken from the action payload.
} else if (action.type === "DELETE_ITEM") { - This line checks if the action type is DELETE_ITEM.
newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName); - This line creates a new array by filtering out the item with the name specified in the action payload.
return newTodoItems; - This line returns the new state.





// Defining the main App component
function App() {
  
  // Using the useReducer hook to create a state and a dispatch function
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [] );

  // Event handler function to add a new item
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate
      }
    }
    dispatchTodoItems(newItemAction);
  };

  // Event handler function to delete an item
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName
      }
    }
    dispatchTodoItems(deleteItemAction);
  }

  // Rendering the App component
  return (
    // Using the TodoItemsContext.Provider to provide the todoItems state and event handler functions to its children
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className='todo-container'>
        <AppName />
        <AddTodo />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

// Exporting the App component as the default export
export default App;
State Management with useReducer:

The useReducer hook is a React hook that allows you to manage complex state logic in your application. It takes two arguments: a reducer function and an initial state. In your code, the reducer function is todoItemsReducer and the initial state is an empty array [].

The todoItemsReducer function is a reducer function. A reducer function in React is a function that takes the current state and an action, and returns a new state based on that action. The reducer function is called with the current state and the action, and it returns a new state. In your code, the reducer function checks the type of action (either "NEW_ITEM" or "DELETE_ITEM") and updates the state accordingly.

The useReducer hook returns an array with two elements: the current state (todoItems) and a dispatch function (dispatchTodoItems). The dispatch function is used to send actions to the reducer function.

Event Handler Functions:

addNewItem is an event handler function that takes two arguments: itemName and itemDueDate. When this function is called, it creates a new action object with a type of "NEW_ITEM" and a payload object containing the itemName and itemDueDate. The dispatch function dispatchTodoItems is then called with this action object as an argument.

deleteItem is another event handler function that takes one argument: todoItemName. When this function is called, it creates a new action object with a type of "DELETE_ITEM" and a payload object containing the todoItemName. The dispatch function dispatchTodoItems is then called with this action object as an argument.

Rendering:

The App component returns JSX that includes the TodoItemsContext.Provider. This provider is used to provide the todoItems state and the event handler functions (addNewItem and deleteItem) to its children components (AppName, AddTodo, and TodoItems). This allows the children components to access and modify the todoItems state and to call the addNewItem and deleteItem functions.

Exporting:

Finally, the App component is exported as the default export so that it can be used in other parts of the application.

In summary, the App component uses the useReducer hook to manage the state of the todo items and provides the todoItems state and event handler functions (addNewItem and deleteItem) to its children components using the TodoItemsContext.Provider. This allows the children components to access and modify the todoItems state and to call the addNewItem and deleteItem functions.





