import React, { useEffect, useState } from 'react';
import Product from './Product';
import './styling/Shop.css';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

const Shop = ({ updateBasketItems }) => {
        
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
            
        <div className={'shop-container shop-container1 '}>
          <BsArrowLeftCircle className='shop-container-button' />
          <Product updateBasketItems={updateBasketItems} />
          <Product updateBasketItems={updateBasketItems} />
          <Product updateBasketItems={updateBasketItems} />
          <BsArrowRightCircle className='shop-container-button' />
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