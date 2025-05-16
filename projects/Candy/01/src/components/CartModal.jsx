import React, { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";

const CartModal = ({ cartItems, onClose }) => {
    const [items, setItems] = useState(cartItems);

    // Update items state when cartItems prop changes
    useEffect(() => {
        setItems(cartItems);
    }, [cartItems]);

    const total = items.reduce((prev, item) => {
        return prev + Number(item.price);
    }, 0);

    const removeItem = (index) => {
        const updatedCartItems = items.filter((_, i) => i !== index);
        setItems(updatedCartItems);
    };

    return (
        <div className="cart-modal" style={{ width: '80%' }}>
            <div className="cart-header col">
                <h6>Your Cart</h6>
                <h6>Total Price: ₹{total}</h6>
                <IoIosClose onClick={onClose} />
            </div>
            <div className="cart-items">
                {items.map((item, index) => (
                    <div key={index} className="cart-item row">
                        <p className="col"><b>Candy Name: {item.name}</b></p>
                        <p className="col"><b>Price: ₹{item.price}</b></p>
                        <p className="col"><b>Detail: {item.detail}</b></p>
                        <div className="col">
                            <IoIosClose onClick={() => removeItem(index)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartModal;
