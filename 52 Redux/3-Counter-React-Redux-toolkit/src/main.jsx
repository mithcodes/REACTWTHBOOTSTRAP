import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
// Provider ek React component hai jo react-redux library se aata hai. Iska kaam Redux store ko pure React application me provide karna hota hai taki kisi bhi component ko Redux store se data access karne me asani ho.
import counterStore from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={counterStore}>
      <App />
    </Provider>
    {/* <Provider store={counterStore}> ka kaam React application mein Redux store ko poore component tree ke liye available banana hota hai. Iska main role yeh hota hai ki tumhara Redux store jo tumne configureStore se banaya hai, wo React ke saare components ke liye globally accessible ho jaaye. */}

  </React.StrictMode>
);
