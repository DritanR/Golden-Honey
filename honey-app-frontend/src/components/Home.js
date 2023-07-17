import Honey from './Honey';
import './styling/Home.css'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa'

const Home = () => {
    return (
        <div className="home">

            <div className = 'home-text-container'>
                <h1 className = 'home-title'>Welcome to Golden Honey!</h1>
                <p className = 'home-p'>Our honey is 100% natural, made with care for over 10 years. On this website, we will provide you with all the information you need about our honey. Feel free to explore and learn more about our delicious honey products.</p>
                <div className='flex-bt-ic'>
                <div className = 'homebuttons-container'>
                    <button className = 'home-shop-button'>Get your Honey</button>
                    <button className = 'home-abouthoney-button'>Explore More</button>
                </div>
                <div className='social-media-home'>
                    <a className='sc-icon' href=''><BsFacebook /></a>
                    <a className='sc-icon' href=''> <FaInstagram /></a>
                    <a className='sc-icon' href=''><FaTiktok /></a>
                </div>
                </div>
            </div>
            <Honey className= 'honey'/>
        </div>
    );
}
 
export default Home;