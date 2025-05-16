import { createSlice } from "@reduxjs/toolkit";

// createSlice ek function hai jo tumhe Redux state ka ek logical part (slice) create karne ka tareeka deta hai.
// Yeh Redux Toolkit ka part hai jo state management ko simplify karta hai, reducers aur actions automatically create karta hai.

const privacySlice = createSlice({
  name: 'privacy',
  // name property Redux slice ka naam define karti hai.

  initialState: false,

  // initialState property se yeh define hota hai ki jab tumhara Redux store initialize ho, toh us slice ka default ya starting state kya hoga.
  // reducers ke andar tumhe wo functions likhne hote hain jo tumhare slice ke state ko change karenge.
  // Reducers pure functions hote hain, jo state ko modify karte hain.
 
  reducers: {
    toggle: (state) => {
      return state = !state;
    }
  }
});

// privacyActions mein wo saare actions store ho jaate hain jo tumne reducers mein define kiye hain.
// dispatch(privacyActions.toggle()); ye code jab control sa dispatch hoga tab ye dispacth yaah ayega or phir state ko change karega 

export const privacyActions = privacySlice.actions;

export default privacySlice;

// privacySlice ko Redux store mein add karna isliye zaroori hota hai kyunki Redux ek centralized state management system hai. Store ke andar saari state manage hoti hai, aur jab tum ek slice create karte ho (jaise privacySlice), to tumhe us slice ko Redux store mein integrate karna padta hai, taki wo state aur uske actions globally accessible ho jaayein.

// privacySlice ko store mein isliye add karna padta hai taki privacy-related state aur actions poore app mein globally accessible ho jayein.
// Redux store mein state centralized hoti hai, aur slices ko add karne se Redux ko pata chalta hai ki kaunsa action kis state ko mo