import React from 'react';

const ProductPrint = ({ productItem, addToCart }) => {
  return (
    <div className="product-container">
      <div className="product-details">
        <img src={productItem.url} alt={productItem.name} className="product-image" />
        <div className="product-name">{productItem.name}</div>
        <div className="product-price">Price: ₹{productItem.price}</div>
        <div className="product-category">Category: {productItem.category}</div>
        <div className="product-seller">Seller: {productItem.seller}</div>
        <button onClick={() => addToCart(productItem)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductPrint;
