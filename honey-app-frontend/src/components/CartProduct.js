import Button from "react-bootstrap/Button"
import { CartContext } from "../CartContext"
import { useContext } from "react"
import { getProductData } from "../productsStore"

function CartProduct (props) {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)

    return (
        <>
            <h3 style={{color: '#F3C622'}}>{productData.title}</h3>
            <p style={{color: 'white'}}><span style={{fontFamily:'none'}}>{quantity}</span> In Total</p>
            <p style={{color: 'white', fontFamily: 'none'}}>${ (quantity * productData.price).toFixed(2) }</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)} style={{backgroundColor: '#FCB43A', color: 'black', border: '1px solid black', fontWeight: '600', padding: '5px 30px 5px 30px'}}>Remove</Button>
            <hr style={{color: 'white'}}></hr>
        </>
    )
}

export default CartProduct;