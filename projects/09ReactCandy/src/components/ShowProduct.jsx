import { useProduct } from "../context/ProductContext";
import classes from "./Style.module.css";

const ShowProduct = () => {
  const { state, dispatch } = useProduct();

  const handleOneClick = (id) => {
    dispatch({ type: "One", payload: { id } });
  };
  const handleTwoClick = (id) => {
    dispatch({ type: "Two", payload: { id } });
  };
  const handleThreeClick = (id) => {
    dispatch({ type: "Three", payload: { id } });
  };

  return (
    <>
      {state.products.map((ele) => {
        return (
          <li key={ele.name} className={classes.form}>
            <div>{ele.name}</div>
            <div>{ele.des}</div>
            <div>{ele.price}</div>
            <button onClick={() => handleOneClick(ele.id)}>Buy One</button>
            <button onClick={() => handleTwoClick(ele.id)}>Buy Two</button>
            <button onClick={() => handleThreeClick(ele.id)}>Buy Three</button>
          </li>
        );
      })}
    </>
  );
};

export default ShowProduct;
