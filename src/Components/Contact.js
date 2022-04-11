import { Button, TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Helmet from 'react-helmet'
import Iframe from 'react-iframe'
import ApartmentIcon from '@mui/icons-material/Apartment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom'
const Contact = () => {
    return (
        <div className='bz-contact'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us  &#8211; Bazaar
                </title>
                <meta
                    name="description"
                    content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
                />
            </Helmet>
            <Container fluid>
                <Row>
                    <Col lg={12} className='m-0 p-0'>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.230269993927!2d-73.98202298434354!3d40.75695984280023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590a50b3a235%3A0x8af09874060f51fc!2sBelgium%20WebNet!5e0!3m2!1sen!2sin!4v1649659405026!5m2!1sen!2sin"
                            width="100%"
                            height="450px"
                            id="bz-map"
                            className="bj-contact-map"
                            display="initial"
                            position="relative" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='mt-5 mb-5 align-items-center'>
                    <Col lg={4}>
                        <div className='contact-content'>
                            <span>find and visit</span>
                            <h2 className='contact-head'>contact us</h2>
                            <p className='text-muted mt-5 mb-5'>Alierewnum phaedrum torquatos nec eu, dasvis detraxit ertssa periculiser reex,nihil dexpetendis in mei Meis an lorem tincidunt vixat, vele ax.</p>
                        </div>
                        <div className='d-flex align-items-center mb-3 pb-3 text-muted'>
                            <ApartmentIcon />
                            <div className='address'>
                                <p className='text-muted m-0 ms-3'>Via S. Raffaele, 6, 20121 Milano</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3 pb-3 text-muted'>
                            <CalendarMonthIcon />
                            <div className='address'>
                                <p className='text-muted m-0 ms-3'>Monday to Friday: 9am to 8pm</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center mb-3 pb-3 text-muted'>
                            <MarkunreadIcon />
                            <div className='address'>
                                <p className='text-muted m-0 ms-3'>bazzar@qodeinteractive.com</p>
                            </div>
                        </div>
                        <div className='bz-side-social-wrapper mt-5'>
                            <div className='social'>
                                <ul>
                                    <li className='d-inline-block me-3'><Link className='text-muted' to="/"><TwitterIcon /></Link></li>
                                    <li className='d-inline-block me-3'><Link className='text-muted' to="/"><InstagramIcon /></Link></li>
                                    <li className='d-inline-block me-3'><Link className='text-muted' to="/"><FacebookOutlinedIcon /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <TextField label="Full name" variant="outlined" className='w-100 mb-3' />
                        <TextField label="Email address" variant="outlined" className='w-100 mb-3' />
                        <TextField label="Website" variant="outlined" className='w-100 mb-3' />
                        <TextField
                            id="filled-multiline-static"
                            label="Write A Comment"
                            className='w-100 mb-3'
                            multiline
                            rows={4}
                            variant="outlined"
                        />
                        <Button variant='contained bg-black rounded-0 text-white'>Subscribe now</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact