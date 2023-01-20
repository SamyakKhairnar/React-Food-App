import React from 'react'
import Logo from '../assets/logofoodapp.svg'
import '../index.css';


function Header() {

  return (
    <nav className="nav-container">
      <img className='logo' src={Logo} alt="Logo" />
      <h1 className='title'>Food App</h1>
      <ul className='navigation'>
        <li className='nav-menu'><a>Home</a></li>
        <li className='nav-menu'><a>About</a></li>
        <li className='nav-menu'><a>Contact</a></li>
        <li className='nav-menu'><a>Cart</a></li>
      </ul>
    </nav>
  )
}

export default Header
