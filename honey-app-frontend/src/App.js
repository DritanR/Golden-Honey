import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { fetchData } from './api';
import Header from './components/Header';
import Home from './components/Home';
import { Helmet } from 'react-helmet';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Basket from './components/Basket';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [basketItems, setBasketItems] = useState(0)


  function updateBasketItems() {
    setBasketItems(basketItems + 1);
  }

  useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const [productImgBasket, setProductImgBasket] = useState(null)
  const [productNameBasket, setProductNameBasket] = useState('')
  const [productPriceBasket, setProductPriceBasket] = useState('')
  const [showRemoveButtonBasket, setShowRemoveButtonBasket] = useState(false)

  function handleBasketProductItems(basketProductImage, basketProductName, basketProductPrice) {
    setProductImgBasket(basketProductImage)
    setProductNameBasket(basketProductName)
    setProductPriceBasket(basketProductPrice)
    setShowRemoveButtonBasket(true)
  }

  function removeItemFromBasket() {
    setShowRemoveButtonBasket(false)
  }

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
      <Header basketItems={basketItems} />
      <Home />
      <About />
      <Shop updateBasketItems={updateBasketItems} handleBasketProductItems={handleBasketProductItems} showRemoveButtonBasket={showRemoveButtonBasket} removeItemFromBasket={removeItemFromBasket} />
      <Contact />
      <Footer />
      <Basket productImgBasket={productImgBasket} productNameBasket={productNameBasket} productPriceBasket={productPriceBasket} showRemoveButtonBasket={showRemoveButtonBasket} removeItemFromBasket={removeItemFromBasket} />

      {/* Display the fetched data */}
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;
