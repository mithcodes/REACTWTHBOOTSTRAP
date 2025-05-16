import { useState } from "react";
import FoodItems from "./components/FoodItems";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";



function App() {
  

  const [foodItems,setFoodItems]=useState(["Sabzi", "Green Vegetable", "Roti", "Salad"]);

  const onKeyDown=(event)=>{
   if(event.key==='Enter'){
    
  let newFoodItem = event.target.value;
  event.target.value='';
console.log("food value is enter"+newFoodItem)

let newItems=[...foodItems,newFoodItem];
setFoodItems(newItems);
// ab pages reprint hoga or fooditems k value ab change h gaya ga
    } 
  
  }
    
  // if (foodItems.length===0){
  //   return <h3>i am still hungry</h3>
  // }

  return (
    <>
   <Container >
     <h1 className="food-heading">Healthy Food</h1>
       {foodItems.length===0 ? <h3>i am hungry</h3>: null}
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
   </Container>
   </>   

      
    
  );
}
export default App;


