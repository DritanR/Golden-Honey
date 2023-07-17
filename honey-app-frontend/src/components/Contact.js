import './styling/Contact.css'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
    return (
        <div className="contact">
            
            <p className='contact-subtitle'>Get In Touch</p>
            <h2 className='contact-title'>With Us</h2>

            <div className='contact-container'>

            <div className='contact-border-container'>
                <p className='email'>
                    <AiOutlineMail className='email-icon'/>
                    goldenhoney@gmail.com</p>
                <div className='social-medias-contact'>
                    <a className='contact-icon' href=''><BsFacebook /></a>
                    <a className='contact-icon' href=''><FaInstagram /></a>
                    <a className='contact-icon' href=''><FaTiktok /></a>
                </div>
            </div>

            <div className='mailing-list'>
                <h2 className='mailing-title'>Join our mailing list</h2>
                <div className='mailing-list-items'>
                    <input className='mailing-list-input' type='text' placeholder='Email adress'/>
                    <button className='mailing-list-button'>SUBSCRIBE</button>
                </div>
            </div>
            </div>

        </div>
    );
}
 
export default Contact;