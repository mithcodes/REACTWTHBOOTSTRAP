import { useState } from "react";
import { useProduct } from "../context/ProductContext";
import { v4 as uuidv4 } from "uuid";
import classes from "./Style.module.css";

const ProductAdd = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");

  const { dispatch } = useProduct();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, des, price, id: uuidv4() };
    setDes("");
    setName("");
    setPrice("");
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
      <div>
        <h4>Candy Name</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <h4>Description</h4>
        <input
          type="text"
          value={des}
          onChange={(e) => setDes(e.target.value)}
        />
      </div>
      <div>
        <h4>price</h4>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductAdd;
