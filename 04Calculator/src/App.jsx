import { useState } from 'react'
import styles from "./App.module.css";
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className={styles.calculator} >
  <Display></Display>
  <ButtonsContainer></ButtonsContainer>


   </div>
  )
}

export default App
