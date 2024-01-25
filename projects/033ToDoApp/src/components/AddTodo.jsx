import { useState } from "react";
// Import Statement: This line imports the useState hook from the React library. The useState hook is used for managing state in functional components.
// aha sa data pass karna ha parent component mai
function AddTodo({ onNewItem }) {
    // Function Component Definition: This line defines a functional component named AddTodo. It takes an object as a parameter, and it's expected that this object has a property named onNewItem, which is a function. This function is presumably provided by the parent component to handle the addition of a new todo item.
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
//   State Variables: These lines declare two state variables, todoName and dueDate, using the useState hook. These variables will be used to store the current values of the todo name and due date input fields.

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
//   Event Handlers: These functions (handleNameChange and handleDateChange) are event handlers that are called when the user types into the input fields. They update the corresponding state variables (todoName and dueDate) with the current input values.

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
//   Add Button Event Handler: This function (handleAddButtonClicked) is called when the "Add" button is clicked. It invokes the onNewItem function passed as a prop (presumably from the parent component) and passes the current values of todoName and dueDate as arguments. Afterward, it resets the input values to an empty string.
// onchange k help sa input mai jo bhi data likha j raha ha usa save karenga or state k help sa hm value parent component mai pass karenga
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" //
          value={dueDate}
        //   agar value ka use nai karenga to purna value input mai show hota rahega
        //   In summary, using value={dueDate} in the date input field ensures that the input is a controlled component, allowing React to manage its state and ensuring that the displayed value always reflects the current state of dueDate. This is a fundamental concept in React for creating interactive and controlled user interfaces.
           onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;


// import React, { useState } from "react";

// function AddTodo({ onNewItem }) {
//   const [todoName, setTodoName] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleNameChange = (event) => {
//     setTodoName(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDueDate(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault(); // Prevents the default form submission behavior

//     // Call the onNewItem function with the current todoName and dueDate
//     onNewItem(todoName, dueDate);

//     // Clear the input values after adding the new todo
//     setDueDate("");
//     setTodoName("");
//   };

//   return (
//     <form className="container text-center" onSubmit={handleFormSubmit}>
//       <div className="row kg-row">
//         <div className="col-6">
//           <label>
//             Todo Name:
//             <input
//               type="text"
//               placeholder="Enter Todo Here"
//               value={todoName}
//               onChange={handleNameChange}
//             />
//           </label>
//         </div>
//         <div className="col-4">
//           <label>
//             Due Date:
//             <input
//               type="date"
//               value={dueDate}
//               onChange={handleDateChange}
//             />
//           </label>
//         </div>
//         <div className="col-2">
//           <button type="submit" className="btn btn-success kg-button">
//             Add
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default AddTodo;
