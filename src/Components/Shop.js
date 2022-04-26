import React, { useState } from 'react'
import { Col, Container, Image, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import product from './Assets/Images/p1.jpg'
import './Assets/Css/Pages.css'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Helmet from 'react-helmet'
const Shop = () => {
    const [lgShow, setLgShow] = useState(false);
    const minDistance = 0;
    function valuetext(value) {
        return `${value}°C`;
    }
    const [value1, setValue1] = React.useState([0, 100]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    return (
        <div className='bz-shop-main'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shop &#8211; Bazaar
                </title>
                <meta
                    name="description"
                    content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide."
                />
            </Helmet>
            <section className='breadcrumb-main'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='breadcrumb-area'>
                                <div className="bz-breadcrumb ">
                                    <Link to="/" className='text-muted text-decoration-none me-1'>Home</Link>
                                    <span className="bz-delimiter text-muted">&nbsp; / &nbsp;</span>
                                    <span className="bz-current text-muted">Shop</span></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='filter-box mb-5'>
                            <h3>Color</h3>
                            <ul>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Black</Link><span className="count">(37)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Blue</Link><span className="count">(31)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Brown</Link><span className="count">(61)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Green</Link> <span className="count">(20)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Grey</Link> <span className="count">(61)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Pink</Link> <span className="count">(29)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Dark</Link> <span className="count">(12)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> White</Link> <span className="count">(57)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Yellow</Link><span className="count">(26)</span></li></ul>
                        </div>
                        <div className='filter-box mb-5'>
                            <h3>Sizes</h3>
                            <ul>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Black</Link><span className="count">(37)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Blue</Link><span className="count">(31)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Brown</Link><span className="count">(61)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Green</Link> <span className="count">(20)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Grey</Link> <span className="count">(61)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Pink</Link> <span className="count">(29)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Dark</Link> <span className="count">(12)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> White</Link> <span className="count">(57)</span></li>
                                <li className="bz-layered-nav"><Link to="/" className='text-muted text-decoration-none me-1'> Yellow</Link><span className="count">(26)</span></li></ul>
                        </div>
                        <div className='filter-box mb-5'>
                            <h3>Price</h3>
                            <Box>
                                <Slider
                                    getAriaLabel={() => 'Minimum distance'}
                                    value={value1}
                                    onChange={handleChange1}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                    disableSwap
                                    className="text-black"
                                />
                            </Box>
                            <p className='text-muted m-0 filter-price'>Price: $7 — $1,350</p>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <Row>
                        <Col lg={4}>
                                {/* <Link to="/product-detail"> */}
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' onClick={() => setLgShow(true)} className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </Col>
                            <Col lg={4}>
                                {/* <Link to="/product-detail"> */}
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' onClick={() => setLgShow(true)} className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </Col>                            
                            <Col lg={4}>
                                <Link to="/product-detail">
                                    <div className='product-block'>
                                        <div className='product-image'>
                                            <Image src={product} className="p-image w-100" />
                                            {/* <div className='look-btn'>
                                                <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                            </div> */}
                                        </div>
                                        <div className='product-content'>
                                            <h3 className='product-title'>3-drawer chest</h3>
                                            <small className='product-price'>$169</small>
                                            <p className='text-muted categories'>Home Decor</p>
                                            <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/product-detail">
                                    <div className='product-block'>
                                        <div className='product-image'>
                                            <Image src={product} className="p-image w-100" />
                                            {/* <div className='look-btn'>
                                                <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                            </div> */}
                                        </div>
                                        <div className='product-content'>
                                            <h3 className='product-title'>3-drawer chest</h3>
                                            <small className='product-price'>$169</small>
                                            <p className='text-muted categories'>Home Decor</p>
                                            <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                {/* <Link to="/product-detail"> */}
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' onClick={() => setLgShow(true)} className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                                {/* </Link> */}
                            </Col>
                            <Col lg={4}>
                                <Link to="/product-detail">
                                    <div className='product-block'>
                                        <div className='product-image'>
                                            <Image src={product} className="p-image w-100" />
                                            {/* <div className='look-btn'>
                                                <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                            </div> */}
                                        </div>
                                        <div className='product-content'>
                                            <h3 className='product-title'>3-drawer chest</h3>
                                            <small className='product-price'>$169</small>
                                            <p className='text-muted categories'>Home Decor</p>
                                            <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/product-detail">
                                    <div className='product-block'>
                                        <div className='product-image'>
                                            <Image src={product} className="p-image w-100" />
                                            {/* <div className='look-btn'>
                                                <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                            </div> */}
                                        </div>
                                        <div className='product-content'>
                                            <h3 className='product-title'>3-drawer chest</h3>
                                            <small className='product-price'>$169</small>
                                            <p className='text-muted categories'>Home Decor</p>
                                            <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/product-detail">
                                    <div className='product-block'>
                                        <div className='product-image'>
                                            <Image src={product} className="p-image w-100" />
                                            {/* <div className='look-btn'>
                                                <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                            </div> */}
                                        </div>
                                        <div className='product-content'>
                                            <h3 className='product-title'>3-drawer chest</h3>
                                            <small className='product-price'>$169</small>
                                            <p className='text-muted categories'>Home Decor</p>
                                            <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                    3-drawer chest
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className='imagedetail'>
                                <Image src={product} className="p-image w-100" />

                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='content-detail p-3'>
                                <div className='product-content'>
                                    <h3 className='product-title'>3-drawer chest</h3><br />
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <small className='product-price'>$169</small>
                                    <p className='text-muted categories'>Home Decor</p>
                                    <div class="bz-add-to-cart"><Link to="/" class="add_to_cart_button">Add to cart</Link></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Shop