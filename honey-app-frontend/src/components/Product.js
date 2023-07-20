import { useState } from 'react';
import './styling/Product.css'

const Product = ({  item, handleDataInCart, setShow }) => {

    const {id, img, name, price} = item



    return (
        <div className = 'product'>
            <img className = 'product-img' src = {img} />
            <h2 className = 'product-name'>{name}</h2>
            <div className = 'product-prise'>
                <span className = 'valute'>$</span>
                <span className = 'sum'>{price}</span>
            </div>
            <div className='buttons-card'>
            <button onClick={() => handleDataInCart(item)} className = 'add-to-cart' >ADD TO CART</button>
            <button onClick={() => setShow(false)} className = 'add-to-cart added-to-cart' >VIEW CART</button>
            </div>
        </div>
    );
}
 
export default Product;