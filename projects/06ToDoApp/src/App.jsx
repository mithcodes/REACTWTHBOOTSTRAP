/* import React from "react";: Import the React library.

import TodoItems from "./components/TodoItems";: Import the TodoItems component.

import WelcomeMessage from "./components/WelcomeMessage";: Import the WelcomeMessage component.

import AddTodo from "./components/AddTodo";: Import the AddTodo component.

import TodoItemsContextProvider from "./store/todo-items-store";: Import the TodoItemsContextProvider from the context store.

function App() {: Define the main App component.

<TodoItemsContextProvider>: Wrap the entire application with the context provider.

<div className="text-center m-4">: Center align the content and add some margin using Bootstrap classes.

<AddTodo />: Include the AddTodo component to allow users to add new todo items.

<WelcomeMessage />: Include the WelcomeMessage component to display a welcome message.

<TodoItems />: Include the TodoItems component to display the list of todo items.

</div>: Close the centered and margin container.

</TodoItemsContextProvider>: Close the context provider. */
import React from "react";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import AddTodo from "./components/AddTodo";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      {/* Center align and add some margin to the content using Bootstrap classes */}
      <div className="text-center m-4">
        {/* Component to add new todo items */}
        <AddTodo />
        {/* Component to display a welcome message */}
        <WelcomeMessage />
        {/* Component to display the list of todo items */}
        <TodoItems />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
