  State: Imagine a piece of data that can change over time, like the number of likes on a post, or the items in a shopping cart. In React, we often use useState to manage this kind of data.

Action: An action is an event or an instruction that tells your app to do something. For example, when a user clicks a button, it triggers an action. In React, actions are often represented as objects with a type property.

Reducer: A reducer is a function that takes the current state and an action, and returns a new state. It's like a recipe that tells your app how to update its data based on the action that was triggered. Reducers are typically written as a switch statement that checks the action type and returns the new state accordingly.

Dispatch: Dispatch is a function provided by useReducer that you use to send actions to the reducer. When you call dispatch with an action, React calls the reducer function with the current state and the action, and updates the state with the new state returned by the reducer.


import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Component
const Counter = () => {
  // Initial state
  const initialState = { count: 0 };

  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
