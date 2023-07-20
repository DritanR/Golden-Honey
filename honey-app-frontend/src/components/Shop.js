import React, { useEffect, useState } from 'react';
import Product from './Product';
import './styling/Shop.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import HoneyJar1 from './honeyjar1.png'
import HoneyJar2 from './honeyjar2.png'
import HoneyJar3 from './honeyjar3.png'
import list from './data'

const Shop = ({ handleDataInCart, setShow }) => {

    {/*const [activeShopContainer, setActiveShopContainer] = useState('shop-container1')

        function HandleActiveContainerRight () {
            setActiveShopContainer(previousContainer => {
                if (previousContainer === 'shop-container1') {
                    return 'shop-container2'
                }else if (previousContainer === 'shop-container2') {
                    return 'shop-container3'
                }else if (previousContainer === 'shop-container3') {
                    return 'shop-container1'
                }
            })
        }
        
        function HandleActiveContainerLeft () {
            setActiveShopContainer(previousContainer => {
                if (previousContainer === 'shop-container1') {
                    return 'shop-container3'
                }else if (previousContainer === 'shop-container3') {
                    return 'shop-container2'
                }else if (previousContainer === 'shop-container2') {
                    return 'shop-container1'
                }
            })
        } */}


    return (
        <div className='shop'>

            <div className='shop-titles'>
                <p className='shop-subtitle'>Check Out Our</p>
                <h2 className='shop-title'>Shop</h2>
            </div>

            {/*<div className={'shop-container shop-container1 '}>
                <BsArrowLeftCircle className='shop-container-button' />
                <Product updateBasketItems={updateBasketItems} ProductName='Big Honey Jar' ProductImage={HoneyJar1} ProductPrice={24.99} handleBasketProductItems={handleBasketProductItems} />
                <Product updateBasketItems={updateBasketItems} ProductName='Medium Honey Jar' ProductImage={HoneyJar2} ProductPrice={19.99} handleBasketProductItems={handleBasketProductItems} />
                <Product updateBasketItems={updateBasketItems} ProductName='Small Honey Jar' ProductImage={HoneyJar3} ProductPrice={14.99} handleBasketProductItems={handleBasketProductItems} />
                <BsArrowRightCircle className='shop-container-button' />
            </div> */}

            <div className='shop-container shop-container1'>
                {
                    list.map((item) => (
                        <Product key={item.id} item={item} handleDataInCart = {handleDataInCart} setShow={setShow} />
                    ))
                }
            </div>


            { /*{activeShopContainer === 'shop-container2' && (
        <div className={'shop-container shop-container2 '}>
          <button className='shop-container-button' onClick={HandleActiveContainerLeft}>sss</button>
          <Product updateBasketItems={updateBasketItems} />
          <Product updateBasketItems={updateBasketItems} />
          <Product updateBasketItems={updateBasketItems} />
          <button className='shop-container-button' onClick={HandleActiveContainerRight}>sss</button>
        </div>
        )}

        {activeShopContainer === 'shop-container3' && (
        <div className={'shop-container shop-container3 '}>
          <button className='shop-container-button' onClick={HandleActiveContainerLeft}>sss</button>
          <Product updateBasketItems={updateBasketItems} />
          <Product updateBasketItems={updateBasketItems} />
          <Product updateBasketItems={updateBasketItems} />
          <button className='shop-container-button' onClick={HandleActiveContainerRight}>sss</button>
        </div>
        )} */ }

        </div>
    );
};
export default Shop;