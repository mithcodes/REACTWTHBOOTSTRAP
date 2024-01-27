// ProductList.jsx
import React from 'react';
import PrintProduct from './PrintProduct'; // Adjust the path based on your actual project structure

const ProductList = ({ product, onDelete }) => {
  return (
    <div className="container">
      {product.map((item) => (
        <PrintProduct key={item.Id} Id={item.Id} Name={item.Name} Price={item.Price} Category={item.Category} onDeleteClick={() => onDelete(item.Id)} />
      //we can aslso use spread opreator to get all properties
      ))}
    </div>
  );
};

export default ProductList;
