import {createContext} from 'react';

export const TodoItemsContext=createContext({
    newTodoItems:[],
    addNewItem:()=>{},
    deleteItem:()=>{},
})