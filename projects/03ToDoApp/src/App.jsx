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
    const newToDoItem = [...todoItems, { id:Date.now(), name: itemName, date: itemduedate }];
    //aha hmlog object ko destructre kar rahah haan 
    setTodoItems(newToDoItem);
  };


  const onDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoItemName);
    setTodoItems(newTodoItems);

    //task do ya kch bhi do pr wo destruct upar wala k form mai hona chahia
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



// Good question! key={item.id} React ke internal rendering process ke liye hota hai, jabki id={item.id} tumhare application logic ke liye hota hai. Dono ka use alag-alag purposes ke liye hota hai. Chalo, dono ko detail se samjhte hain:

// key={item.id}
// Purpose: key prop React ke liye hota hai, jo list ke elements ko efficiently identify aur manage karta hai. Ye key prop React ko help karta hai ki wo jaan sake ki list ke elements mein kya changes aaye hain (add, remove, update).

// Usage: key ko React ki internal workings ke liye use kiya jata hai. Tum ise directly delete ya update karne ke liye nahi use kar sakte, kyunki ye React ke internal rendering process se connected hota hai.

// id={item.id}
// Purpose: id prop tumhare application ke logic ke liye hota hai. Ye tumhare component ko unique identifier provide karta hai, jo tum specific actions perform karne ke liye use kar sakte ho.

// Usage: Tum id ko use kar ke specific item ko delete kar sakte ho. Jab tum id ko onDelete function ke through pass karte ho, to tum precisely identify kar sakte ho ki kaunsa item delete karna hai.