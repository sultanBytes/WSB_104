import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'

const Header = ({ cart, cartData }) => {
  const [cardPosition, setCartPosition] = useState('-800px');
  const [cartOverlay, setOverlay] = useState('none');

 useEffect(()=>{
  const allIds = [];
  cartData.filter((item)=>{
    allIds.push(item.id);
  });

  console.log(allIds);


   axios.get('https://dummyjson.com/products?limit=194')
   .then((response)=>{
    const cartProducts = response.data.products.filter((item)=> allIds.includes(item.id));

    console.log(cartProducts);
   })

 },[cardPosition]);


  return (
    <div className='header' style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <h1>
        Products
      </h1>
      <div style={{ padding: '10px 30px', position: 'relative' }}>
        <FaCartShopping
          style={{ fontSize: '40px', cursor: 'pointer', color: '#A52A2A' }}
          onClick={() => { setCartPosition('0px'); setOverlay('block') }}
        />
        <span style={{
          position: 'absolute',
          top: '-4px',
          right: '20px',
          fontSize: '20px'
        }}>{cart}</span>
      </div>
      <div style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'fixed',
        top: '0',
        right: '0',
        zIndex: '998',
        display: cartOverlay
      }}
        onClick={() => { setCartPosition('-800px'); setOverlay('none') }}
      >

      </div>
      <div style={{
        width: '40vw',
        height: '100vh',
        backgroundColor: 'white',
        position: 'fixed',
        top: '0',
        right: cardPosition,
        zIndex: '999',
        transition: '0.2s',

      }}>

      </div>
    </div>
  )
}

export default Header