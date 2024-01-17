import { useState } from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItems from './components/FoodItems'

function App() {
  const [count, setCount] = useState(0)
  let foodItems=["dal","roti","sabji","bhat"];
  let tell=foodItems.length===4?<h3>I am not hungry</h3>:<h3>I am hungry</h3>
  return (
    <div>
  <div>
    <center>
    <ClockHeading/>
   <ClockSlogan></ClockSlogan>
   <CurrentTime/>
    </center>
    </div>
  <h1>Healthy foods</h1>
  {tell}
  {foodItems.length===0?<h3>I am still hungry</h3>:null}
  {foodItems.length===1 && <h3>phicla wala check karga or sahi hoga tabhi print hoga</h3>}
  <ul class='list-group'>
    {foodItems.map((item)=>(
      <li key={item} class='list-group-item'>
        {item}
      </li>
    ))}
  </ul>

  <FoodItems mithu={foodItems}></FoodItems>




</div>
        
  )
}

export default App


// In the case of the foodItems.map function, each iteration is returning a JSX element, which is a single expression. Therefore, you can use parentheses to wrap the JSX element, and the arrow function will implicitly return it.