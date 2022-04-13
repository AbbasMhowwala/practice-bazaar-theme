import React, { useState } from 'react'
import { Button, Form, Image, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Assets/Images/logo.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import GridOnIcon from '@mui/icons-material/GridOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Menu = () => {
  const [placement, setPlacement] = useState("end");
  const [splacement, setSPlacement] = useState("top");
  const [show, setShow] = useState(false);
  const [showsearch, setShowSearch] = useState(false);
  const handleClose = () => setShow(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShow = () => setShow(true);
  const handleShowSearch = () => setShowSearch(true);
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
          <li className="menu links-menu icon-menu">
            <Link to="/shop"><ShoppingBagIcon /></Link>
          </li>
          <li className="menu links-menu icon-menu">
            <Button className='bg-white text-black border-0 p-0' onClick={handleShowSearch}><SearchIcon /></Button>
          </li>
          <li className="menu links-menu icon-menu">
            <Button className='bg-white text-black border-0 p-0' onClick={handleShow}><GridOnIcon /></Button>
          </li>
        </ul>
      </Navbar>
      <Offcanvas show={showsearch} onHide={handleCloseSearch} placement={splacement} className="searchbar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ visibility: "hidden" }}>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex alitn-items-center'>
          <div className='off-form'>
            <Form className='position-relative'>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control type="email" placeholder="e-mail" />
              </Form.Group>
              <Button variant="contained" type="submit" className='position-absolute text-white submit-btn-foot' style={{ right: "1px", top: "1px" }}>
                Submit
              </Button>
            </Form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={show} onHide={handleClose} placement={placement}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ visibility: "hidden" }}>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='mt-5 text-center text-muted'>
          <h2>welcome</h2>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit aenean commodo
          <div className='position-absolute m-auto w-100' style={{ bottom: "15px" }}>
            <h4 className='mt-5'>follow our awesomeness</h4>
            <div className='social'>
              <ul>
                <li className='d-inline-block me-3'><Link className='text-muted' to="/"><TwitterIcon /></Link></li>
                <li className='d-inline-block me-3'><Link className='text-muted' to="/"><InstagramIcon /></Link></li>
                <li className='d-inline-block me-3'><Link className='text-muted' to="/"><FacebookOutlinedIcon /></Link></li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Menu