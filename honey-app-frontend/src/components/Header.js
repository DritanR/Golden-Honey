import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { GiDrippingHoney, GiHamburgerMenu } from 'react-icons/gi';
import { BsFillBasketFill } from 'react-icons/bs'
import { GrGallery } from 'react-icons/gr'
import './styling/Header.css';
import { CartContext } from '../CartContext';
import CartModal from '../components/CartModal';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function Element(props) {
    return <li className='header-element'>{props.name}</li>;
  }

  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  const [showCartModal, setShowCartModal] = useState(false); // State to control the visibility of the modal

  // Function to handle "View Cart" button click and show the modal
  const handleViewCart = () => {
    setShowCartModal(true);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Handlee&family=Vujahday+Script&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <nav className='header-nav'>
          <p className='header-gallery'>
            <GrGallery className='people-icon' /><a href='https://photos.app.goo.gl/NgWyXFzbN219J8C48' className='header-gallery'>
            Gallery</a></p>


        <ul className='header-nav-ul'>
          <li style={{listStyle: 'none'}} onClick={() => scrollToSection('home')}><Element name='HOME'/></li>
          <li style={{listStyle: 'none'}} onClick={() => scrollToSection('about')}><Element name='ABOUT' /></li>
          <div className='logo-container'>
            <GiDrippingHoney className='logo' />
            <p className='logo-name'>Golden Honey</p>
          </div>
          <li style={{listStyle: 'none'}} onClick={() => scrollToSection('store')}><Element name='STORE' /></li>
          <li style={{listStyle: 'none'}} onClick={() => scrollToSection('contact')}><Element name='CONTACT' /></li>
        </ul>

        <div className='header-basket' onClick={handleViewCart}>
          <BsFillBasketFill className='basket-icon' />
          <span className='basket-items'>{productsCount}</span>
          <span className='basket-text'>Items </span>
        </div>
      </nav>

      <div className='menu header-nav'>
          <p className='header-gallery'>
            <GrGallery className='people-icon' /> <a href='https://photos.app.goo.gl/NgWyXFzbN219J8C48' className='header-gallery'>
            Gallery</a></p>

        <div className='flex-logo-icon'>
          <div className='logo-container'>
            <GiDrippingHoney className='logo' />
            <p className='logo-name'>Golden Honey</p>
          </div>
          <button className='menu-icon-button' onClick={toggleMenu}>
            <GiHamburgerMenu className='menu-icon' />
          </button>
        </div>
        {showMenu && (
          <ul className='header-nav-ul'>
            <li style={{listStyle: 'none', border: 'none'}} onClick={() => scrollToSection('home')}><Element name='HOME' /></li>
            <li style={{listStyle: 'none', border: 'none'}} onClick={() => scrollToSection('about')}><Element name='ABOUT' /></li>
            <li style={{listStyle: 'none', border: 'none'}} onClick={() => scrollToSection('store')}><Element name='STORE' /></li>
            <li style={{listStyle: 'none', border: 'none'}} onClick={() => scrollToSection('contact')}><Element name='CONTACT' /></li>
          </ul>
        )}
        <div className='header-basket' onClick={handleViewCart}>
          <BsFillBasketFill className='basket-icon' />
          <span className='basket-items'>{productsCount}</span>
          <span className='basket-text'>Items </span>
        </div>
      </div>

      <CartModal show={showCartModal} handleClose={() => setShowCartModal(false)} />
    </div>
  );
};

export default Header;
