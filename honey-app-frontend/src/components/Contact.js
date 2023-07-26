import './styling/Contact.css'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import axios from 'axios'
import { useState } from 'react';

const Contact = () => {
    const [email, setEmail] = useState('')

    const handleSubscribe = async (e) => {
        e.preventDefault()
        setEmail('')

        try {
            const response = await axios.post('http://localhost:4000/add-email', { email })

            if (response.status == 201) {
                console.log('Email added to the list successfully!');
            } else {
                console.error('Failed to add email to the list.');
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }

    return (
        <div className="contact" id="contact">

            <p className='contact-subtitle'>Get In Touch</p>
            <h2 className='contact-title'>With Us</h2>

            <div className='contact-container'>

                <div className='contact-border-container'>
                    <p className='email'>
                        <AiOutlineMail className='email-icon' />
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
                        <input className='mailing-list-input' type='email' placeholder='Email adress' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className='mailing-list-button' onClick={handleSubscribe}>SUBSCRIBE</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;