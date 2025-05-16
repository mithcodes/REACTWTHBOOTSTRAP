import { useSelector } from "react-redux";
// useSelector: Yeh ek hook hai jo React-Redux mein use hota hai. Iska kaam hai Redux store se state ko fetch karna aur usse component ke andar use karna.
// Redux store mein tumhari puri application ki state hoti hai, aur useSelector ka use karke tum specific state ko extract kar sakte ho.

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);

  // Yahan useSelector hook ko use kiya gaya hai Redux store se counter ki state nikalne ke liye.
  // store Redux ka global store hota hai jisme tumhari application ki sari state hoti hai.
  // store.counter: Yeh us portion ko access karta hai jo counterSlice me define hua hai. Jaise tumne apne configureStore me counter slice ko add kiya tha.

//   Yahan tum counterVal ko destructure kar rahe ho jo store.counter ka ek property hai.
// counterVal woh value hai jo tumne counterSlice ke initial state mein { counterVal: 0 } set ki thi. Isliye, jab bhi counter increment ya decrement hota hai, Redux store me counterVal update ho jata hai.

  return <p className="lead mb-4">Counter current Value: {counterVal}</p>;

  // {counterVal}: Curly braces ke andar counter ki current value display ho rahi hai, jo tumne Redux store se useSelector ke through extract ki thi.


};

export default DisplayCounter;
