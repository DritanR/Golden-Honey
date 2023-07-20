import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { Helmet } from 'react-helmet';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {

  const [show, setShow] = useState(true)

  const [cart, setCart] = useState([])

  function handleDataInCart(item) {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div>
      <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Handlee&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header setShow={setShow} cart={cart} />
      <Home />
      <About />
      {show ? (<Shop handleDataInCart={handleDataInCart} setShow={setShow} />)
        : (<Cart cart={cart} setCart={setCart} handleChange={handleChange} setShow={setShow} />)}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
