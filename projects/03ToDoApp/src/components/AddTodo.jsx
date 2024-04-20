import { useState, useRef } from 'react';
import styles from './AddTodo.module.css'
import { MdOutlineLibraryAdd } from "react-icons/md";


function AddTodo({onNewItem}) {
  //  const [todoName,setTodoName]=useState("");
  // const [dueDate,setDueDate]=useState("")
// useref sa bahut sara code nai likhna padega orhr input ka baad page render nai karega 
 const todoNameElement=useRef()
 const dueDateElement=useRef()
//   const handleNameChange=(event)=>{
// console.log(event.target.value)
// setTodoName(event.target.value)
// }
//y dono ki bh jarurut nai padegi
// const handDateChange=(event)=>{
// console.log(event.target.value)
// setDueDate(event.target.value)
// }

const handleAddButtonClicked=()=>{
  const todoName=todoNameElement.current.value
  const dueDate=dueDateElement.current.value
  onNewItem(todoName,dueDate)
  todoNameElement.current.value=""
  dueDateElement.current.value=""
  // onNewItem(todoName,dueDate)
  // setDueDate("")
  // setTodoName("")
}

    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            {/* <input type="text"  placeholder="Enter Todo Here"  onChange={handleNameChange} value={todoName} />
          </div> */}
           <input type="text" ref={todoNameElement} placeholder="Enter Todo Here"   />
          </div>
          {/* <div className="col-4">
            <input type="date"  onChange={handDateChange} value={dueDate}/>
          </div> */}
          <div className="col-4">
            <input type="date" ref={dueDateElement}  />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button " onClick={handleAddButtonClicked}>
            <MdOutlineLibraryAdd />
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;

//   useState is for changing data that should make the component re-render.
// useRef is for storing values or working with the DOM without re-rendering the component.