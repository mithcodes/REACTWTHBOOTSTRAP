import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
 
 
  // const handleOnChange=(event)=>{
  //   console.log(event.target.value);
  // }
  
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;

// onChange event handler is commonly used with form elements to capture and respond to changes made by users. The onChange event is triggered whenever the value of an input, select, or textarea element changes.

// Here's a breakdown of why you might use onChange={handleOnChange} in R
//onkeydown kaam karega jab enter dabenga