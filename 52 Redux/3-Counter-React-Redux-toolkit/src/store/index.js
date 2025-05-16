import {configureStore, createSlice} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privacySlice from "./privacy";


// configureStore: Yeh Redux Toolkit ka ek function hai jo store banata hai. Is function ka use karke tum store ko configure karte ho, jo state management ke liye central location hota hai.

// createSlice: Yeh function ek Redux slice banata hai, jo ek logical part hota hai jisme state aur usko update karne wale reducers hote hain.

// counterSlice aur privacySlice: Yeh do slices ko import kiya gaya hai jo alag-alag functionalities ko manage karte hain:

const counterStore = configureStore({
  
  
  reducer: {


//   counter: Yeh counterSlice.reducer ko refer karta hai. Iska matlab hai ki jab tum counter se related actions dispatch karoge, toh yeh reducer un actions ko handle karega.

// privacy: Yeh privacySlice.reducer ko refer karta hai. Iska matlab hai ki jab tum privacy se related actions dispatch karoge, toh yeh reducer unhe handle karega.


  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}

});

export default counterStore;