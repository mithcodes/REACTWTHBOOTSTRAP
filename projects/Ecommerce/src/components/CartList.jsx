import React from 'react';
import CartPrint from './CartPrint';

const CartList = ({ cart }) => {
  return (
    <div className="cartlist">
      <CartPrint cart={cart} />
      
    </div>
  );
};

export default CartList;
