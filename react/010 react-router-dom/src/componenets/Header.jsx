import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    {/* <Link to='/' className='mx-5 py-5'>Home</Link>
    <Link to='/faq'>Faq</Link> */}

    <NavLink to='/' className={({isActive})=>`mx-5 ${isActive ? 'text-danger' : 'text-success'}` }>Home</NavLink>
    <NavLink to='/faq' className={({isActive})=>`mx-5 ${isActive ? 'text-danger' : 'text-success'}` }> Faq</NavLink>
    </>
  )
}

//isActive activeClass activeStyle

export default Header