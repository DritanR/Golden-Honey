import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavbarComponent from './components/StoreNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
import PreApp from './components/PreApp';

function App() {

  const [preApp, setPreApp] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setPreApp(false)
    }, 2000)
  }, [])

  return (
    <>
      {preApp ? < PreApp /> :

        <div className='app'>
          <CartProvider>
            <Header />
            <Home />
            <About />
            <Container>
              <Routes>
                <Route index element={<Store />} />
                <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} />
              </Routes>
            </Container>
            <Contact />
            <Footer />
          </CartProvider>
        </div>
      }
    </>
  );
}

export default App;
