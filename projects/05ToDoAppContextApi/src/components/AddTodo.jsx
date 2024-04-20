import {useState} from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import {useContext} from "react";
const AddTodo=()=>{
    const {addNewItem}=useContext(TodoItemsContext)
    const [todoName,setTodoName]=useState('')
    const [dueDate,setDueDate]=useState('')
    const handleNameChange=(event)=>{
        setTodoName(event.target.value);

    }
    const handleDateChange=(event)=>{
        setDueDate(event.target.value);

    }
    const handleAddButtonClicked=()=>{
        addNewItem(todoName,dueDate)
        setDueDate('')
        setTodoName('')
    };


    return(
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input 
                    type="text"
                    placeholder="Enter todo here"
                    value={todoName}
                    onChange={handleNameChange}
                    />
                    </div>
                    <div className="col-4">
                        <input 
                        type="date"
                        value={dueDate}
                         onChange={handleDateChange}
                         />
                         </div>
                         <div className="col-2">
                            <button
                            type="button"
                            className="btn btn-success kg-button"
                            onClick={handleAddButtonClicked}
                            >Add</button>

                         </div>
                        </div>
                </div>
            
    )
}

export default AddTodo




// useState: This is a React hook that allows functional components to have state variables.
// TodoItemsContext: This is presumably a React context that provides access to some global state or functions related to todo items.
// useContext: Another React hook used for consuming a context and getting the values provided by the nearest <MyContext.Provider> in the component tree

// useContext(TodoItemsContext): This line uses the useContext hook to get the value of TodoItemsContext. The addNewItem function is extracted from this context.
// useState(''): Two state variables todoName and dueDate are initialized using the useState hook. The initial state for both is an empty string.

// handleNameChange: This function is called when the input for todo name changes. It updates the todoName state with the new value.
// handleDateChange: This function is called when the input for the due date changes. It updates the dueDate state with the new value.

// handleAddButtonClicked: This function is called when the "Add" button is clicked. It calls the addNewItem function from the context with the current values of todoName and dueDate. After that, it resets both state variables to empty strings.