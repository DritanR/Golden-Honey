import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import { BsFillBasketFill } from 'react-icons/bs';

const CartModal = ({ show, handleClose }) => {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
      
    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json()
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url) //Forwarding user to stripe
            }
        })
    }
  
    return (
        <Modal show={show} onHide={handleClose} style={{fontFamily: 'Handlee'}}>
        <Modal.Header closeButton style={{backgroundColor: '#3A3637', borderBottom: '1px solid #F3C622'}}>
            <Modal.Title style={{color: '#FCB43A', fontSize: '25px'}}>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'black', textAlign: 'center'}}>
            {productsCount > 0 ? (
                <>
                <p style={{color:'white', textAlign: "start", fontSize: '18px'}}>Items in your cart:</p>
                {cart.items.map((currentProduct, idx) => (
                    <CartProduct key={idx} id = {currentProduct.id} quantity={currentProduct.quantity} />
                ))}

                <h1 style={{textAlign: 'start', fontSize: "30px", color: 'white', color: '#F3C622'}}>Total: <span style={{fontFamily: 'none', fontSize: '25px', color: 'white'}}>$ {cart.getTotalCost().toFixed(2)}</span></h1>                

                <Button variant="success" onClick={checkout} style={{color: 'black', backgroundColor: '#F3C622', fontWeight: '600', border: '1px solid black', float: 'left'}}>
                    Purchase Items!
                </Button>
                </>
            ):(
                <h1 style={{color: 'white', fontSize: '22px'}}>Your Cart Is Empty...</h1>
            )}
        </Modal.Body>
    </Modal>
    );
  };
  
  export default CartModal;