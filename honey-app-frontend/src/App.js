import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { Helmet } from 'react-helmet';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import NavbarComponent from './components/Navbaar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';

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
      <Header setShow={setShow} cart={cart} />
      <Home />
      <About />
      {show ? (<Shop handleDataInCart={handleDataInCart} setShow={setShow} />)
        : (<Cart cart={cart} setCart={setCart} handleChange={handleChange} setShow={setShow} />)}
      <Contact />
      <Footer />

    <CartProvider>
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
      <Routes>
        <Route index element={<Store />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
      </BrowserRouter>
      </Container>
      </CartProvider>
    </div>
  );
}

export default App;
