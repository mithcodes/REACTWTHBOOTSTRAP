import { useState } from 'react'
import AppName from './components/AppName'
import AddToDo from './components/AddToDo'
import ToDoItem from './components/ToDoItem1'
import ToDoItem2 from './components/TodoItem2'
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
     <center
     class='todo-container'>
      {/* aha ham component use karenga kinta mast haa use karna*/}
      <AppName/>
      <AddToDo/>
      <div class="container text-center">
        <div class="row m-3">
          <div class="col-4">
            <input type="text" placeholder='enter to do herre'/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="button"class="btn btn-success">Add</button>
         </div>
         </div>
         </div>
         <ToDoItem todoDate="4/4/12" todoName="food"></ToDoItem>
<ToDoItem todoDate="4/4/12" todoName="shooping"></ToDoItem>
<ToDoItem todoDate="4/4/12" todoName="fee"></ToDoItem>
<ToDoItem todoDate="4/4/12" todoName="food"></ToDoItem>
<ToDoItem todoDate="4/4/12" todoName="food"></ToDoItem>

          <ToDoItem2/>
          <ToDoItem2/>
        <div class="container text-center">
       <div class="row">
        <div class="col-4">
            Buy Milk
          </div>
          <div class="col-4">
            4/10/12
          </div>
          <div class="col-2">
            <button type="button"class="btn btn-danger">Delete</button>
          </div>
          </div>
          </div>

 <div class="container text-center">
          <div class="row">
          <div class="col-4">
            Buy Milk
          </div>
          <div class="col-4">
            4/10/12
          </div>
          <div class="col-2">
            <button type="button"class="btn btn-danger">Delete</button>
          </div>
          </div>
        </div>
      
     </center>
  )
}

export default App


{/* //center tage content ko center mai le atta han */}