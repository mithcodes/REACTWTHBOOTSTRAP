import {useContext} from "react"
import {TodoItemsContext} from "../store/todo-items-store"

import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"

const TodoItems=()=>{
    // const contextObj=useContext(TodoItemsContext)
    // const printData=contextObj.todoItems
    //todoItems App.jsx sa ayah ha jo sara input ko store karta haan
     //abb hm direct destruct kar sakta han

     const {todoItems}=useContext(TodoItemsContext)

     return(
        <div className={styles.itemsContainer}>
            {todoItems.map((item)=>{
                <TodoItem
                todoDate={item.dueDate}
                todoName={item.name}
                ></TodoItem>
            })}
        </div>
     )
}

export default TodoItems