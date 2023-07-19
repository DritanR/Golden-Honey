import { useState } from 'react';
import './styling/Product.css'

const Product = ({ updateBasketItems, ProductName, ProductImage, ProductPrice, handleBasketProductItems }) => {

    const [showViewCartButton, setShowViewCartButton] = useState(false)

    const handleAddToBasket = () => {
        updateBasketItems();
        handleBasketProductItems(ProductImage, ProductName, ProductPrice)
        setShowViewCartButton(true)
      };

    return (
        <div className = 'product'>
            <img className = 'product-img' src = {ProductImage} />
            <h2 className = 'product-name'>{ProductName}</h2>
            <div className = 'product-prise'>
                <span className = 'valute'>$</span>
                <span className = 'sum'>{ProductPrice}</span>
            </div>
            <div className='buttons-card'>
            {!showViewCartButton && <button onClick={handleAddToBasket} className = 'add-to-cart' >ADD TO CART</button>}
            {showViewCartButton && <button className = 'add-to-cart added-to-cart' >VIEW CART</button>}
            </div>
        </div>
    );
}
 
export default Product;