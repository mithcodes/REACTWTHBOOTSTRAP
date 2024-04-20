import {createContext} from 'react';

export const TodoItemsContext=createContext({
    todoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
})

// createContext
// The createContext function from React creates a new Context object. A Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// export const TodoItemsContext
// This exports a new context named TodoItemsContext, which can be used in other parts of your application.

// context object
// The context object provided to createContext has three properties: