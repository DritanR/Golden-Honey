import React, { useState, useEffect } from "react";
import './styling/Cart.css'

const Cart = ({ cart, setCart, handleChange, setShow}) => {

  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  
  return (
    <article className="all-items-cart" style={{ color: 'white' }}>
      <div className="cart-titles">
        <h2 className="cart-title1">Product :</h2>
        <h2 className="cart-title2">Amount :</h2>
        <h2 className="cart-title3">Price :</h2>
      </div>
      {cart.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-product-name-img">
            <img className="cart-product-img" src={item.img} alt="" />
            <p className="cart-product-name">{item.name}</p>
          </div>
          <div className="buttons-amount">
            <button className="cart-plus-button" onClick={() => handleChange(item, 1)}>+</button>
            <button className="cart-amount-show">{item.amount}</button>
            <button className="cart-minus-button" onClick={() => handleChange(item, -1)}>-</button>
          </div>

          <span className="cart-item-price">$ {item.price}</span>
          <button className="cart-item-remove-button" onClick={() => handleRemove(item.id)}>Remove Item</button>

        </div>
      ))}
      <div className="end-of-the-cart">

        <div className="cart-buttons">
          <button className="cart-continue-shopping" onClick={() => setShow(true)}>CONTINUE SHOPPING</button>
        </div>

        <div className="cart-total">
          <span className="cart-total-text">Total Price Of Your Cart :</span>
          <span className="cart-total-price">$ {price}</span>
        </div>

      </div>

    </article>
  );
};

export default Cart;