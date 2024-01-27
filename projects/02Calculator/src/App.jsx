import { useState } from 'react';
import styles from './App.module.css';
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  const [calVal,setCalVal] = useState("");
  // text properties name ha go target sa mila h console sa
 const onButtonClick=(texts)=>{
 if(texts==='C'){
setCalVal("")
 }else if(texts==="="){
  const result=eval(calVal)
   setCalVal(result)
 }else {
  const newDisplay=calVal+texts;
  setCalVal(newDisplay)
 }
  }
   return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
