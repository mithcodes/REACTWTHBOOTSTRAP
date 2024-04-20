1. Import Statement:
javascript
Copy code
import { useSelector } from "react-redux";
Purpose:
Importing the useSelector hook from the react-redux library to access the Redux store state in functional components.
2. DisplayCounter Component:
javascript
Copy code
const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value: {counter}</p>;
};
Purpose:
Define a functional React component (DisplayCounter) to display the current value of the counter from the Redux store.
Functionality:
useSelector((store) => store.counter): Uses the useSelector hook to select and extract the counter value from the Redux store state.
The selector function takes the entire store state as an argument and returns the counter value.
return <p className="lead mb-4">Counter current Value: {counter}</p>;: Returns a JSX element to render a paragraph (<p>) displaying the current value of the counter.
The className="lead mb-4" adds Bootstrap styling classes for font size and margin.
3. Export Statement:
javascript
Copy code
export default DisplayCounter;
Purpose:
Export the DisplayCounter component to make it available for importing and using in other parts of the application.
Summary:
Import Statement: Import useSelector hook from react-redux.
DisplayCounter Component: Define a functional component to display the current value of the counter from the Redux store using useSelector.
Export Statement: Export the DisplayCounter component for use in other parts of the application.
This code defines a React component (DisplayCounter) that uses the useSelector hook to access and display the current value of the counter from the Redux store, making it available to be used and displayed in other parts of the application.






