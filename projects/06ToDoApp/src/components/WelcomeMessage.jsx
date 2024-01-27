// import React, { useContext } from "react";: Import React and useContext hook.

// import { TodoItemsContext } from "../store/todo-items-store";: Import the TodoItemsContext from the context store.

// const WelcomeMessage = () => {: Define the WelcomeMessage component as a functional component.

// const { todoItems } = useContext(TodoItemsContext);: Access todoItems from the context using useContext.

// return (: Start the JSX for the component.

// todoItems.length === 0 && (: Check if there are no todo items.

// <p className="text-success fs-4">Enjoy Your Day</p>: Display a welcome message with Bootstrap classes for styling.

// ): Close the condition.

// export default WelcomeMessage;: Export the WelcomeMessage component.

import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  // Display the welcome message only if there are no todo items
  return (
    todoItems.length === 0 && (
      // Apply Bootstrap classes for styling
      <p className="text-success fs-4">Enjoy Your Day</p>
    )
  );
};

export default WelcomeMessage;
