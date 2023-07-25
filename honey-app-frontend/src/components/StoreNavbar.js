import { Button, Container, Navbar, Modal } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';
import { BsFillBasketFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import CartModal from './CartModal';

function NavbarComponent() {
    const cart = useContext(CartContext)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    return (
        <>
            <Navbar expand="sm" style={{ margin: "200px 0 0 0" }}>
                <Link to="/" style={{ textDecoration: "none" }}><Navbar.Brand style={{ color: '#F3C622', fontFamily: 'Caveat', fontSize: '35px', border: '1px solid white', padding: '10px', borderRadius: '20px', margin: '15px' }}>Golden Honey Store</Navbar.Brand></Link>
                <Navbar.Toggle style={{ backgroundColor: '#F3C622' }} />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow} style={{ backgroundColor: '#F3C622', border: '1px solid black', color: 'black', fontFamily: 'Handlee', fontWeight: '600', fontSize: '20px', margin: '15px' }}><BsFillBasketFill /> {productsCount} Items</Button>
                </Navbar.Collapse>
            </Navbar>

            <CartModal show={show} handleClose={handleClose} />
        </>
    )
}

export default NavbarComponent;