import '../components/styling/SuccessCancel.css'
import { Link } from 'react-router-dom'

function Success () {
    return (
    <div className="success-cancel-container">
    <h1 className="h1-sc-cn">Thank you for your purchase!</h1>
    <Link to="/"><button className="button-sc-cn">Continue Shopping</button></Link>
    </div>
    )
}

export default Success;