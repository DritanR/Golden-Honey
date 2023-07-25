import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'

function ProductCard(props) { // props.product is the product we are selling
    const product = props.product
    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <Card>
            <Card.Body style={{backgroundColor: "black", border: '1px solid white', borderRadius: '25px'}}>
                <Card.Img src = {product.img} style={{height: '200px', width: '200px'}} />
                <Card.Title style={{fontFamily: 'Handlee', color: '#F3C622', fontSize: '25px'}}>{product.title}</Card.Title>
                <Card.Text style={{color: 'white'}}>${product.price}</Card.Text>
                {productQuantity > 0 ? (
                    <>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6" style={{color: 'white', fontFamily: 'Handlee', fontSize: '20px'}}>In Cart: <span style={{fontFamily: 'none'}}>{productQuantity}</span></Form.Label>
                        <Col sm="6">
                            <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)} style={{backgroundColor: '#FCB43A', color: 'black', border: '1px solid black', padding: '2px 10px 5px 10px', fontWeight: '600'}} >+</Button>
                            <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(product.id)} style={{backgroundColor: '#FCB43A', color: 'black', border: '1px solid black', padding: '2px 10px 5px 10px', fontWeight: '600'}}>-</Button>
                        </Col>
                    </Form>
                    <Button variant="danger" classNam="my-2" onClick={() => cart.deleteFromCart(product.id) } style={{backgroundColor: '#F3C622', color: 'black', fontSize: '17px', border: '1px solid black', fontFamily: 'Handlee', fontWeight: '600', borderRadius: '20px', padding: '8px 40px 8px 40px', margin: '10px 0 0 0'}}>Remove Item</Button>
                    </>
                ) : (
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)} style={{backgroundColor: '#F3C622', color: 'black', fontSize: '17px', border: '1px solid black', fontFamily: 'Handlee', fontWeight: '600', borderRadius: '20px', padding: '8px 40px 8px 40px'}}>Add to Card</Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProductCard;