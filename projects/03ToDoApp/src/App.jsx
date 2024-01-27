import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import './App.css';
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  

  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemduedate) => {
    console.log(`new item ${itemName}  ${itemduedate}`);
    const newToDoItem = [...todoItems, {  name: itemName, date: itemduedate }];
    setTodoItems(newToDoItem);
  };


  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  // 
  //uppar wala code perfect kaam karega agar ui phicla koi data pa depent na ho or picha ka ui ka dependence na ho
  // 
 // isa hm compressed kar sakta han
//  setTodoItems((currValue)=>{
//    [...currValue, {  name: itemName, date: itemduedate }];
  
// })

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewItem} />
     {todoItems.length===0 && <WelcomeMessage ></WelcomeMessage>} 
      <TodoItems todoItems={todoItems} onDeleteClick={onDeleteItem} />
    </center>
  );
}

export default App;
