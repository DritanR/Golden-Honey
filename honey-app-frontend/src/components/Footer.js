import './styling/Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
    const CurrentYear = new Date().getFullYear() 

    return (
        <div className="footer">
            <p className='end'>&copy; {CurrentYear} Golden Honey. All Rights Reserved.</p>
            <div className='footer-elements-left'>
                <a href='' className='fel-text'>Shipping and Returns</a>
                <a href='' className='fel-text'>Terms and Conditions</a>
                <a href='' className='fel-text'>Privacy Policy</a>
            </div>
            <div className='footer-elements-center'>
                <a href='' className='fel-text'>Buy Organic Honey</a>
                <a href='' className='fel-text'>Payment and Security</a>
                <a href='' className='fel-text'>Log In</a>
            </div>
            <div className='footer-elements-right'>
                <a href='' className='fel-text'>About Us</a>
                <a href='' className='fel-text'>Join Our Mailing List</a>
                <a href='' className='fel-text'>Contact Us</a>
            </div>
        </div>
    );
}

export default Footer;