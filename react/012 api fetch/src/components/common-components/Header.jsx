import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

const Header = ({cart}) => {
  return (
    <div className='header' style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <h1>
      Products
      </h1>
      <div style={{padding:'10px 30px', position:'relative'}}>
        <FaCartShopping style={{fontSize:'40px', cursor:'pointer', color:'#A52A2A'}}/>
        <span style={{
          position:'absolute',
          top:'0',
          right:'20px',
          fontSize:'20px'
        }}>{cart}</span>
      </div>
    </div>
  )
}

export default Header