import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <Link to='/' className='mx-5 py-5'>Home</Link>
    <Link to='/faq'>Faq</Link>

    {/* <NavLink to='/' className='mx-'>Home</NavLink> */}
    {/* <NavLink to='/faq'>Faq</NavLink> */}
    </>
  )
}

export default Header