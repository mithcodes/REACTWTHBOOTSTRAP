import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal: 0},
  // Yeh Redux Toolkit ka ek feature hai jisme tum functions define karte ho jo state ko modify karte hain.
  // Reducers wahi functions hain jo state me koi bhi change karte hain, aur tum inhe actions dispatch karne ke baad invoke karte ho.


  reducers: {
    increment: (state) => {
      state.counterVal++;
      // Jab tum increment action dispatch karoge, state.counterVal++ run hoga.
      // Yeh initial state ek object hai jisme ek property counterVal hai, aur uski shuruaati value 0 hai.

      // state ka origin?
      // Jab tum ek Redux slice create karte ho, Redux automatically tumhare reducers ko ek state object provide karta hai, jo us particular slice ka current state hota hai.
      // Redux ka mechanism hota hai ki jab bhi koi action dispatch hota hai, wo reducer function ko call karta hai aur us waqt wo reducer ko current state deta hai.
      // state refers to current state of the counterSlice.
      // Initial state jo tumne define ki thi { counterVal: 0 }, wahi Redux ke andar state ke roop me store hoti hai.


//       Toh Redux Toolkit automatically har reducer function (jaise increment) ko ek argument deta hai:

// ➡️ Ye argument state hota hai, jo uss slice ka current state hota hai.
  
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload);
    }
  }
});

export const counterActions = counterSlice.actions;

// counterActions ek object hai jo Redux Toolkit ne automatically banaya hai. Isme saare reducers ke action functions hote hain, jinhe tum dispatch kar sakte ho state update karne ke liye.

export default counterSlice;