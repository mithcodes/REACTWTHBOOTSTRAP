import { useState } from "react";
import FoodItems from "./components/FoodItems";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";



function App() {
  // let foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  // let textToshow="food item enter by user";
  // let [text,setText]=useState("enter your item")
  // const handleInput=(event)=>{
  //   setText(event.target.value);
  // }

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
  return (
    <>
   <Container >
     <h1 className="food-heading">Healthy Food</h1>
      {/* <FoodInput onhadleInput={handleInput}></FoodInput>
      <p>{text}</p> */}
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
   </Container>
   </>   

      
    
  );
}
export default App;


