import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { GiDrippingHoney, GiHamburgerMenu } from 'react-icons/gi';
import { BsFillBasketFill, BsFillPeopleFill } from 'react-icons/bs'
import './styling/Header.css';

const Header = ({basketItems}) => {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  function Element(props) {
    return <li className='header-element'>{props.name}</li>;
  }

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
        <BsFillPeopleFill className='people-icon'/>
            Log In</p>

        <ul className='header-nav-ul'>
          <Element name='HOME' />
          <Element name='ABOUT' />
          <div className='logo-container'>
            <GiDrippingHoney className='logo' />
            <p className='logo-name'>Golden Honey</p>
          </div>
          <Element name='SHOP' />
          <Element name='CONTACT' />
        </ul>

        <div className='header-basket'>
          <BsFillBasketFill className='basket-icon'/>
          <span className='basket-items'>{basketItems}</span>
          <span className='basket-text'>Items </span>
        </div>
      </nav>

      <div className='menu header-nav'>
        <p className='header-gallery'>
            <BsFillPeopleFill className='people-icon'/>
            Log In</p>
        <div className='flex-logo-icon'>
          <div className='logo-container'>
            <GiDrippingHoney className='logo'/>
            <p className='logo-name'>Golden Honey</p>
          </div>
          <button className='menu-icon-button' onClick={toggleMenu}>
            <GiHamburgerMenu className='menu-icon' />
          </button>
        </div>
        {showMenu && (
          <ul className='header-nav-ul'>
            <Element name='HOME' />
            <Element name='ABOUT' />
            <Element name='SHOP' />
            <Element name='CONTACT' />
          </ul>
        )}
        <div className='header-basket'>
          <BsFillBasketFill className='basket-icon'/>
          <span className='basket-items'>{basketItems}</span>
          <span className='basket-text'>Items </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
