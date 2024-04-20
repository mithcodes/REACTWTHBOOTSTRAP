import React from 'react';
import ProductPrint from './ProductPrint';

const ProductList = ({ product, addToCart }) => {
  return (
    <div className="">
      {product.map((productItem, index) => (
        <ProductPrint key={index} productItem={productItem} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
