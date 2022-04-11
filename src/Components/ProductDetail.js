import React, { useState } from 'react'
import { Button, Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap'
import Helmet from 'react-helmet' 
import { Link } from 'react-router-dom'
import SliderImage from 'react-zoom-slider';
import detailproduct from './Assets/Images/detailproduct.jpg'
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import product from './Assets/Images/p1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductDetail = () => {
    function increment(c) {
        // setCount(c => c + 1);
        return c + 1;
    }
    const [count, setCount] = useState(0);
    function decrement(c) {
        // setCount(c => Math.max(c - 1, 0));
        return c - 1;
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const data = [
        {
            image: detailproduct,
            text: 'img1'
        },
        {
            image: detailproduct,
            text: 'img2'
        },
        {
            image: detailproduct,
            text: 'img3'
        }
    ]
    return (
        <div className='bj-product-detail'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Product Detail    &#8211; Bazaar
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
                                    <span className="bz-current text-muted">Shop</span>
                                    <span className="bz-delimiter text-muted">&nbsp; / &nbsp;</span>
                                    <span className="bz-current text-muted"> Mens Fashion</span>
                                    <span className="bz-delimiter text-muted">&nbsp; / &nbsp;</span>
                                    <span className="bz-current text-muted"> Aviator Sunglasses</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <Row className='align-items-center mb-5'>
                    <Col lg={6}>
                        <div className='product-detail-slider'>
                            <SliderImage
                                data={data}
                                width="100%"
                                showDescription={true}
                                direction="right"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='product-detail'>
                            <h1 className='details-heading'>aviator sunglasses</h1>
                            <h5 className='detail-price'>$256</h5>
                            <p className='text-muted detail-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies aliquam.</p>
                            <div className='d-flex align-items-center mb-3'>
                                <div className='field me-3'>
                                    <Button variant='contained' className='qty-btn minus' onClick={() => setCount(decrement)}>-</Button>
                                    <TextField id="outlined-basic" variant="standard" value={count} />
                                    <Button variant='contained' className='qty-btn plus' onClick={() => setCount(increment)}>+</Button>
                                </div>
                                <Link className='text-white text-decoration-none' to="/cart"><Button variant='contained' className='qty-btn add-to-cart'>Add to cart</Button></Link>
                            </div>
                            <p className='sku text-muted'>Sku: 66565</p>
                            <p className='sku text-muted'>Category: Mens Fashion</p>
                            <p className='sku text-muted mb-5'>Tags: Glass, Men, Silver</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='align-items-center product-tab mb-5'>
                    <Col lg={12}>
                        <Tabs
                            defaultActiveKey="home"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="description">
                                <p className='text-muted description-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt, lectus eu volutpat mattis, ante metus lacinia tellus, vitae condimentum nulla enim bibendum nibh. Praesent turpis risus, interdum nec venenatis id, pretium sit amet purus.</p>
                            </Tab>
                            <Tab eventKey="info" title="additional information">
                                <table className="text-muted">
                                    <tbody><tr>
                                        <th>Weight</th>
                                        <td className="product_weight p-3">1.2 kg</td>
                                    </tr>
                                        <tr>
                                            <th>Dimensions</th>
                                            <td className="product_dimensions p-3">2- x 15 x 7 cm</td>
                                        </tr>
                                        <tr>
                                            <th>Colors</th>
                                            <td className='p-3'><p className='m-0'>Grey</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Sizes</th>
                                            <td className='p-3'><p className='m-0'>One Size</p>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </Tab>
                            <Tab eventKey="review" title="reviews (0)">
                                <Row>
                                    <Col lg={6}>
                                        <div className='reviews'>
                                            <p className='text-muted'>there are no reviews yet.</p>
                                            <p>be the first to review “aviator sunglasses”</p>
                                            <p> your email address will not be published. required fields are marked *</p>
                                            <TextField
                                                className='w-100 mb-3'
                                                helperText="Please enter your name"
                                                id="demo-helper-text-aligned"
                                                label="Name"
                                            />
                                            <TextField
                                                className='w-100 mb-3'
                                                helperText="Please enter your email"
                                                id="demo-helper-text-aligned"
                                                label="Email"
                                            />
                                            <TextField
                                                className='w-100 mb-3'
                                                id="outlined-multiline-flexible"
                                                label="Your Review"
                                                multiline
                                                maxRows={12}
                                                helperText="Please enter your review"
                                            />
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox name="save my name, email, and website in this browser for the next time i comment." />
                                                    }
                                                    label="save my name, email, and website in this browser for the next time i comment."
                                                />
                                            </FormGroup>
                                            <Button variant='contained' className='qty-btn add-to-cart mt-3'>Submit</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            <Container className='similar-product'>
                <Row>
                    <Slider {...settings}>
                        <div className='me-3'> 
                            <Link to="/product-detail">
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/cart" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='me-3'> 
                            <Link to="/product-detail">
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/cart" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='me-3'> 
                            <Link to="/product-detail">
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/cart" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='me-3'> 
                            <Link to="/product-detail">
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/cart" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='me-3'> 
                            <Link to="/product-detail">
                                <div className='product-block'>
                                    <div className='product-image'>
                                        <Image src={product} className="p-image w-100" />
                                        <div className='look-btn'>
                                            <Button variant='contained' className='quick-btn'>Quick Look</Button>
                                        </div>
                                    </div>
                                    <div className='product-content'>
                                        <h3 className='product-title'>3-drawer chest</h3>
                                        <small className='product-price'>$169</small>
                                        <p className='text-muted categories'>Home Decor</p>
                                        <div class="bz-add-to-cart"><Link to="/cart" class="add_to_cart_button">Add to cart</Link></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Slider>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetail