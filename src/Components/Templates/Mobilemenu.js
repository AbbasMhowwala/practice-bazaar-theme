import { Button } from '@mui/material';
import React, { useState } from 'react'
import { Col, Container, Image, Navbar, Offcanvas, Row, Nav, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Mobilemenu = () => {
  const options = [
    {
      name: "start",
    }
  ];
  const [show, setShow] = useState(false);
  const [placement1, setPlacement1] = useState("start");
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setPlacement1(e);
  };
  return (
    <div className='bz-mobile-menu'>
      <Container>
        <Row>
          <Col lg={12}>
            <div className='bz-mobile'>
              <Navbar className="mobile-menu w-100 justify-content-between bg-white" fixed='top'>
                {options?.map((e) => (
                  <Button variant="primary" onClick={() => handleShow(e.name)}>
                    <MenuIcon />
                  </Button>
                ))}
                <Offcanvas show={show} placement={placement1} onHide={handleClose}>
                  <Offcanvas.Body>
                    <div className='bz-side-logo-wrapper my-3'>
                      <div className='logo'>
                        <Image src={logo} className="img-fluid" />
                      </div>
                    </div>
                    <div className='bz-side-menu-wrapper my-3'>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item>
                          <Accordion.Header>Home</Accordion.Header>
                          <Accordion.Body>
                            <ul className='bz-sidenav-ul'>
                              <li><Link to="/" className='bz-side-navlink'>Main Home</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Uncovering Showcase</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Split Screen Showcase</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Animated Shop</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Asymmetric Shop</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Classic Shop</Link></li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Pages</Accordion.Header>
                          <Accordion.Body>
                            <ul className='bz-sidenav-ul'>
                              <li><Link to="/about" className='bz-side-navlink'>About Us</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Meet the Team</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Payment Plans</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Our Gift Vouchers</Link></li>
                              <li><Link to="/contact" className='bz-side-navlink'>Contact Us</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Coming Soon Page</Link></li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Shop</Accordion.Header>
                          <Accordion.Body>
                            <ul className='bz-sidenav-ul'>
                              <li><Link to="/shop" className='bz-side-navlink'>Shop</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Boxed Masonary</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Shop Carousel</Link></li>
                              <li><Link to="/" className='bz-side-navlink'>Single Category</Link></li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='no-link-accordion'>
                          <Accordion.Header><Link to="/" className='bz-side-navlink'>Order Tracking</Link></Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='no-link-accordion'>
                          <Accordion.Header><Link to="/" className='bz-side-navlink'>Blog</Link></Accordion.Header>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='no-link-accordion'>
                          <Accordion.Header><Link to="/" className='bz-side-navlink'>Lookbook</Link></Accordion.Header>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                    <div className='bz-side-social-wrapper'>
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
                <div className="logo logo1">
                  <Nav.Link to="/">
                    <Image src={logo} alt="Logo" fluid></Image>
                  </Nav.Link>
                </div>
                <div className="shop me-3">
                  <Link className='text-black' to="/shop"><ShoppingBagIcon /></Link>
                </div>
              </Navbar>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Mobilemenu