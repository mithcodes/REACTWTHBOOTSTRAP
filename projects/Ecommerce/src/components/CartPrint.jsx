import React from 'react';

const CartPrint = ({ cart }) => {
  return (
    <div className="cartItem">
      {cart.map((cartItem, index) => (
        <div key={index}>
          <img src={cartItem.url} alt={cartItem.name} />
          <span>{cartItem.name}</span>
          <button>-</button>
          <span>{cartItem.quantity}</span>
          <button>+</button>
          <span>{cartItem.price * cartItem.quantity}</span>
        </div>
      ))}
      <p>
        Total:₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}
      </p>
    </div>
  );
};

export default CartPrint;
