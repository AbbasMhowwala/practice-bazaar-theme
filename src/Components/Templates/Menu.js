import React from 'react'
import { Image, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import GridOnIcon from '@mui/icons-material/GridOn';
const Menu = () => {
  return (
    <div className='bz-main-menu'>
      <Navbar className="primary-nav align-items-center d-block">
        <ul className="navbar-ul d-flex flex-row align-items-center">
          <li className="logo-menu">
            <div className="logo">
              <Link to="/">
                <Image src={logo} alt="Logo" fluid></Image>
              </Link>
            </div>
          </li>
          <li className="menu links-menu">
            <Link to="/">Home</Link>
            <div className='submenu'>
              <ul>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
                 <li className="submenu-links"><Link to="/">Home</Link></li>
              </ul>
            </div>
          </li>
          <li className="menu links-menu">
            <Link to="/about">About Us</Link>
          </li>
          <li className="menu links-menu">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="menu links-menu">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="menu links-menu">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="menu links-menu">
            <Link to="/shop"><ShoppingBagIcon /></Link>
          </li>
          <li className="menu links-menu">
            <Link to="/shop"><SearchIcon /></Link>
          </li>
          <li className="menu links-menu">
            <Link to="/shop"><GridOnIcon /></Link>
          </li>
        </ul>
      </Navbar>
    </div>
  )
}

export default Menu