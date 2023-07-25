import '../components/styling/SuccessCancel.css'
import { Link } from 'react-router-dom'

function Cancel() {
    return (
    <div className="success-cancel-container">
    <h1 className="h1-sc-cn">Sorry, your order is canceled!</h1>
    <Link to="/"><button className="button-sc-cn">Continue Shopping</button></Link>
    </div>
    )
}

export default Cancel;