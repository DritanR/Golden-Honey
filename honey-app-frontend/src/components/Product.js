import { useState } from 'react';
import './styling/Product.css'
import img from './honeyjar.png'

const Product = ({ updateBasketItems }) => {

    const [addedToCard, setAddedToCard] = useState(false)

    const handleAddToBasket = () => {
        updateBasketItems();
        setAddedToCard(true)
      };

    return (
        <div className = 'product'>
            <img className = 'product-img' src = {img} />
            <h2 className = 'product-name'>Medium Honey Jar</h2>
            <div className = 'product-prise'>
                <span className = 'valute'>$</span>
                <span className = 'sum'>4.99</span>
            </div>
            {!addedToCard && <button onClick={handleAddToBasket} className = 'add-to-cart' >ADD TO CART</button>}
            <div className='buttons-card'>
            {addedToCard && <button className = 'add-to-cart added-to-cart' >VIEW CART</button>}
            </div>
        </div>
    );
}
 
export default Product;