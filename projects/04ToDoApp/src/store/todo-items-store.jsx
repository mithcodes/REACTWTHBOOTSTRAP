import { createContext } from 'react';

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

//ovider ka help sa ToDocontxt k andar jo bhi h wo createcontext ko mil raha haan
