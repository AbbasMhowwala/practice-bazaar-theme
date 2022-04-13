import React from 'react'
import { Accordion, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Assets/Css/Template.css'
import logo from '../Assets/Images/logo.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Sidebar = () => {
    return (
        <div className='bz-sidebar-wrapper'>
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
        </div>
    )
}
