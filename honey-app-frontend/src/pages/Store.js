import React, { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import '../components/styling/Store.css';
import MoneyBackIcon from '../components/money-icon.png';
import { BsBasketFill } from 'react-icons/bs';
import { CartContext } from '../CartContext';
import CartModal from '../components/CartModal';

function Store() {
    const cart = useContext(CartContext);
    const [showCartModal, setShowCartModal] = useState(false); // State to control the visibility of the modal
  
    // Function to handle "View Cart" button click and show the modal
    const handleViewCart = () => {
      setShowCartModal(true);
    };
  

    return (
        <>
            <div className='store-titles' id="store">
                <h2 className='store-subtitle'>Check Out</h2>
                <h1 className="store-title">Our Store</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
            <div className='store-bottom'>
                <button className='sb-button' onClick={handleViewCart}><BsBasketFill/> View Cart</button>

                <div className='sb-text-container'>
                    <p className='sb-text'>100% Money Back Guarantee, Secure and Fast</p>
                    <img className='money-back-icon' src={MoneyBackIcon} />
                </div>

                <div className='sb-total-container'>
                    <span className='sb-total-text'>Total: </span>
                    <span className='sb-total-value'>$ {cart.getTotalCost().toFixed(2)}</span>
                </div>

            </div>
            <CartModal show={showCartModal} handleClose={() => setShowCartModal(false)} />
        </>
    )
}

export default Store;