import React from 'react';

const Header = ({ count, showCart }) => {
  return (
    <div className="flex shopping-cart">
      <div onClick={() => showCart(false)}>ShoppingCart App</div>
      <div onClick={() => showCart(true)}>Cart<sup>{count}</sup></div>
    </div>
  );
};

export default Header;
