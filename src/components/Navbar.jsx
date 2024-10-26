import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link className='nav-link' to="/">Interactivity</Link>
      <Link className='nav-link' to="/responding-to-events">EventResponse</Link>
    </div>
  )
}

export default Navbar
