import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import product from './Assets/Images/p1.jpg'

const Shop = () => {
    return (
        <div className='bz-shop-main'>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='filter-box'>
                            <h3>Color</h3>
                            <ul>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Black</Link><span className="count">(37)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Blue</Link><span className="count">(31)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Brown</Link><span className="count">(61)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Green</Link> <span className="count">(20)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Grey</Link> <span className="count">(61)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Pink</Link> <span className="count">(29)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Dark</Link> <span className="count">(12)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> White</Link> <span className="count">(57)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-black text-decoration-none me-1'> Yellow</Link><span className="count">(26)</span></li></ul>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Row>
                            <Col lg={4}>
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='3-drawer chest$169'>3-drawer chest</h3>
                                        <p className='text-muted'>Home Decor</p>
                                        <small>$169</small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='product-block'>
                                    <Image src={product} className="p-image w-100" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className='product-block'>
                                    <Image src={product} className="p-image w-100" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shop