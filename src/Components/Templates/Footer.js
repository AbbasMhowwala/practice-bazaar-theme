import React from 'react'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logow from '../Assets/Images/logow.png'
import payment from '../Assets/Images/payment.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material'
const Footer = () => {
  return (
    <div className='bz-main-footer bg-black'>
      <Container fluid>
        <Row className='align-items-center'>
          <Col lg={3}>
            <div className='bz-client-info'>
              <Image src={logow} className="img-fluid d-block m-3" />
              <Link to="/" className='m-3 d-block text-decoration-none text-white'>Belgium WebNet</Link>
              <Image src={payment} className="img-fuid m-3" />
              <ul className='m-3 social-media'>
                <li className='d-inline-block me-3'><Link to="/"><FacebookOutlinedIcon /></Link></li>
                <li className='d-inline-block me-3'><Link to="/"><InstagramIcon /></Link></li>
                <li className='d-inline-block me-1'><Link to="/"><TwitterIcon /></Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={3}>
            <h3 className='footer-title text-white mb-3'>Locate Us</h3>
            <ul>
              <li className='foot-link'>28 Bartholomeo street, NY, NY</li>
              <li className='foot-link'>phone: <Link className='text-decoration-none text-muted' to="tel: 0035 265 244 58">0035 265 244 58</Link></li>
              <li className='foot-link'>phone: <Link className='text-decoration-none text-muted' to="tel: 0035 244 58 265">0035 244 58 265</Link></li>
              <li className='foot-link'>email: <Link className='text-decoration-none text-muted' to="mailto: bazzar@example.com">bazzar@example.com</Link></li>
            </ul>
          </Col>
          <Col lg={3}>
            <h3 className='footer-title text-white mb-3'>Profile</h3>
            <ul>  
              <li className='foot-link'>28 Bartholomeo street, NY, NY</li>
              <li className='foot-link'>phone: <Link className='text-decoration-none text-muted' to="tel: 0035 265 244 58">0035 265 244 58</Link></li>
              <li className='foot-link'>phone: <Link className='text-decoration-none text-muted' to="tel: 0035 244 58 265">0035 244 58 265</Link></li>
              <li className='foot-link'>email: <Link className='text-decoration-none text-muted' to="mailto: bazzar@example.com">bazzar@example.com</Link></li>
            </ul>
          </Col>
          <Col lg={3}>
            <Form className='position-relative'>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Control type="email" placeholder="e-mail" />
              </Form.Group>
              <Button variant="contained" type="submit" className='position-absolute submit-btn-foot' style={{right: "1px", top: "1px"}}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Footer